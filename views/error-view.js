'use strict';

var app = app || {};

(function(module) {
  var errorView = {};
  errorView.initErrorPage = (err) => {
    $('.page').hide();
    $('#error-view').show();
    $('.error-view').empty();
    err = {status: err.status, statusText: err.statusText};
    const template = Handlebars.compile($('#error-template').text());
    $('.error-view').append(template(err));
    $('.error-view').show();
  };
  module.errorView = errorView;
})(app);