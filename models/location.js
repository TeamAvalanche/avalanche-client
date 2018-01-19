'use strict';

var app = app || {};

(module => {

  const __API_URL__ = 'http://www.nwac.us/api/v2/';

  function avalancheForecast() {}
  //   avalancheDay1Date = [];

  //   function errorCallback(err) {
  //     console.error(err);
  // app.errorView.initErrorPage(err);
  //}

  //     function avalancheForecast(region, weather, avDanger, avProblems) {
  //         this.region = region,
  //             this.weather = weather,
  //             this.avDanger = avDanger,
  //             this.avProblems = avProblems;

  //         avalancheForecast.fetchAll = () => $.getJSON(__API_URL__)

  //     }
  // });

  avalancheForecast.getForecast = avalancheRegion => {
    $.getJSON(`${__API_URL__}avalanche-region-forecast/?format=json&zone=${avalancheRegion}`)
      .then(avalancheRegion => console.log(avalancheRegion))
      .catch(error => console.log('error tell us', error));
  };

  avalancheForecast.getForecast('olympics');

  module.avalancheForecast = avalancheForecast;

})(app);






// let avalancheRegion = ''
// function findRegion1(avalancheRegion){
//     `${__API_URL__}avalanche-region-forecast/?format=json&zone=${avalancheRegion}`
// }

// let findRegion = ''
// function findRegion(

// let date = function (
//     if (res.objects[i].day1_date === "date") {
//         .then (avalancheDay1Date => arr.push(avalancheDay1Date),
//         console.log("date")
//         ).catch(errorCallback);
// });

// avalancheRegion.fetchOne = (id) => $.getJSON(_API_URL_ + '/api/v1/' + id).catch(errorCallback);


// // var = new Date()