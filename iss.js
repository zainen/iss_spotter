/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (err, response, body) => {
    const IP = JSON.parse(body).ip;
    if (err) {
      callback(err, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), IP);
      return;
    } else  {
      callback(null, IP);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`http://ip-api.com/json/${ip}`, (err, response, body) => {
    // console.log('response:', response.statusCode)
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), body);
    } else {
      const {lat, lon} = JSON.parse(body);
      callback(null, {lat, lon});
    }
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), body);
    } else {
      let passes = JSON.parse(body).response;
      callback(null, passes);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP , fetchISSFlyOverTimes};