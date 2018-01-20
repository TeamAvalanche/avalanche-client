'use strict';

var app = app || {};

(module => {

  function errorCallback(err) {
    console.error(err);
    // app.errorView.initErrorPage(err);
  }

  const _API_URL_ = 'http://localhost:3000';

  function Location() { }

  Location.fetchRegion = (region, callback) => {
    return $.getJSON(_API_URL_ + '/nwac/' + region)
      .then((data) => callback(data))
      .catch(errorCallback);
  };

  // const __API_URL__ = 'http://www.nwac.us/api/v2/avalanche-forecast/?format=json';

  // function Forecast(region, weather, avDanger, avProblems) {
  //   this.region = region,
  //   this.weather = weather,
  //   this.avDanger = avDanger,
  //   this.avProblems = avProblems;

  //   Forecast.all [];

  //   Forecast.fetchAll = () => $.getJSON(__API_URL__)
  // }

  module.Location = Location;

})(app);
// let location = 'Olympics'
// function findLocation(location){
//     `http://www.nwac.us/api/v2/avalanche-region-forecast/?format=json&zone=${location}`
// }
