'use strict';

var app = app || {};

(module => {

  const __API_URL__ = 'http://www.nwac.us/api/v2/avalanche-forecast/?format=json';

  function Forecast(region, weather, avDanger, avProblems) {
    this.region = region,
    this.weather = weather,
    this.avDanger = avDanger,
    this.avProblems = avProblems;

    Forecast.all [];

    Forecast.fetchAll = () => $.getJSON(__API_URL__)

  }
});
let location = 'Olympics'
function findLocation(location){
    `http://www.nwac.us/api/v2/avalanche-region-forecast/?format=json&zone=${location}`
}
