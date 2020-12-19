const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=95a2d2ec482edde071de8f7f6d3a049a";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log(error);
      callback("Unable to reach weather services");
    } else if (body.message) {
      callback(body.message + ". Try again");
    } else {
      callback(undefined, {
        location_name: body.name,
        weather_description: body.weather[0].description,
        temperature: body.main.temp + " degrees celsius",
      });
    }
  });
};

module.exports = forecast;
