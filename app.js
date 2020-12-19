const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//location latittude and longitude thro geocode API
//weather forecast with openweather API

const location = process.argv[2];

if (!location) {
  console.log("Kindly put in a location name");
} else {
  geocode(location, (error, { latitude, longitude }) => {
    if (error) {
      return error;
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return error;
        } else {
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          console.log(forecastData);
        }
      });
    }
  });
}
