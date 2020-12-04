// index2.js

// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised')
// const { fetchISSFlyOverTimes } = require('./iss_promised')

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })




// const { fetchCoordsByIP } = require('./iss_promised')
// const { fetchISSFlyOverTimes} = require('./iss_promised')

// const { PassThrough } = require('stream')
// const { nextISSTimesForMyLocation } = require('./iss_promised')

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))

// // nextISSTimesForMyLocation()
//   // .then((passTimes) => {
//   //   printPassTimes(passTimes)
//   // })
//   // .catch((error) => {
//   //   console.log('It didn\'t work: ', error.message)
//   // });