// index.js
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('172.103.171.249', (err, data) => {
//   if (err) {
//     console.log('Coodinates Error;', err);
//   } else if (data.length === 0) {
//     console.log('No data received');
//   } else {
//     console.log(`Coordinates are:`, data);
//   }
// });

// fetchISSFlyOverTimes(exampleCoords, (err, passTimes) => {
//   if (err) {
//     console.log('It didn\'t work:', err);
//     return;
//   }
//   console.log('Flyover times:' , passTimes);
// });
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didn\'t work!', error);
  }
  printPassTimes(passTimes)
})