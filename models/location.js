'use strict';

var app = app || {};

(module => {
  function errorCallback(err) {
    console.error(err);
    // app.errorView.initErrorPage(err);
  }

  const _API_URL_ = 'https://team-avalanche.herokuapp.com';

  function Location() {}

  Location.fetchRegion = (region, callback) => {
    return $.getJSON(_API_URL_ + '/nwac/' + region)
      .then((data) => callback(data))
      .catch(errorCallback);
  };

  Location.fetchScrape = (region, callback) => {
    return $.getJSON(`${_API_URL_}/scrape/` + region)
      .then((temps) => callback(temps))
      .catch(errorCallback);
  };

  module.Location = Location;

})(app);