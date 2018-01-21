'use strict';

var app = app || {};

(module => {

  const _API_URL_ = 'http://localhost:3000';

  function Location() { }

  Location.fetchRegion = (region, callback) => {
    return $.getJSON(_API_URL_ + '/nwac/' + region)
      .then((data) => callback(data))
      .catch(errorCallback);
  };

  module.Location = Location;

})(app);

