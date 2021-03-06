'use strict';

var app = app || {};

(module => {

  let forecastCreateView = {};

  const $view = $('#forecast-page');

  forecastCreateView.displayForecast = (locationObject, temps, region) => {
    $('#forecast-info').empty();
    let locationName;
    let locationDetail;
    if (region === 'cascade-west-north-baker') {
      locationDetail = 'This forecast covers the Cascade West North - Canadian Border to Skagit River area.';
      locationName = 'Mt. Baker';
    } else if (region === 'cascade-west-stevens-pass') {
      locationDetail = 'This forecast covers the Cascade Pass - Stevens Pass area.';
      locationName = 'Stevens Pass';
    } else if (region === 'cascade-west-snoqualmie-pass') {
      locationDetail = 'This forecast covers the Cascade Pass - Snoqualmie Pass area.';
      locationName = 'Snoqualmie Pass';
    } else if (region === 'cascade-west-south') {
      locationDetail = 'This forecast covers the Cascade West - South of I-90 to Columbia River area.';
      locationName = 'Crystal/Mt. Rainier';
    }
    let summary = locationObject.objects[0].bottom_line_summary;
    let aboveDangerLevel = locationObject.objects[0].day1_danger_elev_high;
    let atDangerLevel = locationObject.objects[0].day1_danger_elev_middle;
    let problemType = locationObject.objects[0].problems[0].problem_type.definition;
    let splits = problemType.split('</p>', 1);
    let belowDangerLevel = locationObject.objects[0].day1_danger_elev_low;
    $('#forecast-info').append(`
    <h2>${locationName}</h2>
    <p>${locationDetail}</p>
    <h2>Weather</h2>
    <p>${temps}</p>
    <h2>Bottom Line Summary</h2>
    ${summary}
    <div class="triangle-container">
        <div class="triangle-holder">
            <img class="triangles" src="images/above-treeline.png">
            <div>
              <p id="above-treeline" class="${aboveDangerLevel}">${aboveDangerLevel}</p>
              <p>Above Treeline</p>
            </div>
        </div>
        <div class="triangle-holder">
            <img class="triangles" src="images/at-treeline.png">
            <div>
              <p id="at-treeline" class="${atDangerLevel}">${atDangerLevel}</p>
              <p>Near Treeline</p>
            </div>
        </div>
        <div class="triangle-holder">
            <img class="triangles" src="images/below-treeline.png">
            <div>
              <p id="below-treeline" class="${belowDangerLevel}">${belowDangerLevel}</p>
              <p>Below Treeline</p>
            </div>
        </div>
    </div>
    <h2>Problems</h2>
    ${splits}
    `);
  };

  forecastCreateView.fetchEverything = (region) => {
    app.Location.fetchRegion(region, (locationObject) => {
      //region fetched, now fetch scrape data
      app.Location.fetchScrape(region, (temps) => {
        //scrape fetched, now display forecast
        forecastCreateView.displayForecast(locationObject, temps, region);
      });
    });
  };

  forecastCreateView.init = () => {
    if (localStorage.getItem('region')) {
      let regionString = localStorage.getItem('region');
      let regionParsed = JSON.parse(regionString);
      forecastCreateView.fetchEverything(regionParsed);
    }
    $view.show();
  };

  $('#forecast-select').on('change', function (e) {
    e.preventDefault();
    let region = $('#forecast-select').val();
    forecastCreateView.fetchEverything(region);
    let regionString = JSON.stringify(region);
    localStorage.setItem('region', regionString);
  });

  module.forecastCreateView = forecastCreateView;

})(app);