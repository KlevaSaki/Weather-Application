const request = require("request");

const geocode = (location, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    location +
    ".json?access_token={token_key}";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to reach geocode services", undefined);
    } else if (body.features.length === 0) {
      callback("Wrong cordinates, Try again");
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[1],
        longitude: body.features[0].geometry.coordinates[0],
      });
    }
  });
};

module.exports = geocode;
