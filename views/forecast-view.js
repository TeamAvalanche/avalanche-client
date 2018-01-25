'use strict';

var app = app || {};

(module => {

  let forecastCreateView = {};

  const $view = $('#forecast-page');

  forecastCreateView.displayForecast = (locationObject, temps) => {
    $('#forecast-info').empty();
    let location = locationObject.objects[0].zones[0].zone_name;
    let summary = locationObject.objects[0].bottom_line_summary;
    let aboveDangerLevel = locationObject.objects[0].day1_danger_elev_high;
    let atDangerLevel = locationObject.objects[0].day1_danger_elev_middle;
    let belowDangerLevel = locationObject.objects[0].day1_danger_elev_low2;
    let problemType = locationObject.objects[0].problems[0].problem_type.definition;

    let splits = problemType.split('</p>', 1);

    $('#forecast-info').append(`
    <h2>Location</h2>
    <p>${location}</p>
    <h2>Weather</h2>
    <p>${temps}</p>
    <h2>Bottom Line Summary</h2>
    <p>${summary}</p>
    <div class="triangle-container">
        <div class="triangle-holder">
            <img class="triangles" src="images/above-treeline.png"><p id="above-treeline" class="${aboveDangerLevel}">${aboveDangerLevel}</p>
        </div>
        <div class="triangle-holder">
            <img class="triangles" src="images/at-treeline.png"><p id="at-treeline" class="${atDangerLevel}">${atDangerLevel}</p>
        </div>
        <div class="triangle-holder">
            <img class="triangles" src="images/below-treeline.png"><p id="below-treeline" class="${belowDangerLevel}">${belowDangerLevel}</p>
        </div>
    </div>
    <h2>Problems</h2>
    <p>${splits}
    `);
  };

  //   $('#banner-image').on('change', function(e) {
  //     e.preventDefault();
  //     let bannerImage = $('#banner-image')
  //     if val = 'cascade-west-north-baker'
  //         bannerImage = 'images/Mt.Baker.jpg'
  //     else if val =
  //   });

  let fetchEverything = (region) => {
    app.Location.fetchRegion(region, (locationObject) => {
      //region fetched, now fetch scrape data
      app.Location.fetchScrape(region, (temps) => {
        //scrape fetched, now display forecast
        forecastCreateView.displayForecast(locationObject, temps);
      });
    });
  };

  forecastCreateView.init = () => {
    if (localStorage.getItem('region')) {
      let regionString = localStorage.getItem('region');
      let regionParsed = JSON.parse(regionString);
      console.log('region parsed local storage ', regionParsed);
      fetchEverything(regionParsed);
    }
    $view.show();
  };

  $('#forecast-select').on('change', function (e) {
    e.preventDefault();
    let region = $('#forecast-select').val();
    fetchEverything(region);
    let regionString = JSON.stringify(region);
    localStorage.setItem('region', regionString);
  });

  module.forecastCreateView = forecastCreateView;

})(app);