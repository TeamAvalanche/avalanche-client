'use strict';

var app = app || {};

(module => {

  let homeCreateView = {};

  const $view = $('#home-page');

  homeCreateView.init = () => {
    console.log('home create view init');
    $view.show();
  };

  module.homeCreateView = homeCreateView;

})(app);