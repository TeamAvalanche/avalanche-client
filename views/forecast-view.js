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
    // let aboveDangerLevel2 = locationObject.objects[0].day2_danger_elev_high;
    // let atDangerLevel2 = locationObject.objects[0].day2_danger_elev_middle;
    // let belowDangerLevel2 = locationObject.objects[0].day2_danger_elev_low;
    $('#forecast-info').append(`
    <h2>Location</h2>
    <p>${location}</p>
    <h2>Bottom Line Summary</h2>
    <p>${summary}</p>
    <img class="triangles" src="images/above-treeline.png"><p id="above-treeline" class="${aboveDangerLevel}">${aboveDangerLevel}</p>
    <img class="triangles" src="images/at-treeline.png"><p id="at-treeline" class="${atDangerLevel}">${atDangerLevel}</p>
    <img class="triangles" src="images/below-treeline.png"><p id="below-treeline" class="${belowDangerLevel}">${belowDangerLevel}</p>
    `);
  };

  //   $('#banner-image').on('change', function(e) {
  //     e.preventDefault();
  //     let bannerImage = $('#banner-image')
  //     if val = 'cascade-west-north-baker'
  //         bannerImage = 'images/Mt.Baker.jpg'
  //     else if val =
  //   });

  $('#forecast-select').on('change', function(e) {
    e.preventDefault();
    let region = $('#forecast-select').val();
    app.Location.fetchRegion(region, forecastCreateView.displayForecast);
  });

  module.forecastCreateView = forecastCreateView;

})(app);