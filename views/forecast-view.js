'use strict';

var app = app || {};

(module => {

  let forecastCreateView = {};

  const $view = $('#forecast-page');

  forecastCreateView.init = () => {
    console.log('forecast create view init');
    $view.show();
  };

  forecastCreateView.displayForecast = (locationObject) => {
    $('#forecast-info').empty();
    let location = locationObject.objects[0].zones[0].zone_name;
    let summary = locationObject.objects[0].bottom_line_summary;
    let aboveDangerLevel = locationObject.objects[0].day1_danger_elev_high;
    let atDangerLevel = locationObject.objects[0].day1_danger_elev_middle;
    let belowDangerLevel = locationObject.objects[0].day1_danger_elev_low;
    $('#forecast-info').append(`
    <h1>Location</h1>
    <p>${location}</p>
    <h1>Bottom Line Summary</h1>
    <p>${summary}</p>
    <img src="images/above-treeline.png"><p id="above-treeline" class="${aboveDangerLevel}">${aboveDangerLevel}</p>
    <img src="images/at-treeline.png"><p id="at-treeline" class="${atDangerLevel}">${atDangerLevel}</p>
    <img src="images/below-treeline.png"><p id="below-treeline" class="${belowDangerLevel}">${belowDangerLevel}</p>
    `);
  };

  $('#forecast-select').on('change', function(e) {
    e.preventDefault();
    let region = $('#forecast-select').val();
    app.Location.fetchRegion(region, forecastCreateView.displayForecast);
  });

  module.forecastCreateView = forecastCreateView;

})(app); 