'use strict';

var app = app || {};

(module => {
  let thanksView = {};

  thanksView.init = () => {
    $('.page').hide();
    $('#thank-you-page').show();
  };

  module.thanksView = thanksView;

})(app);