'use strict';

var app = app || {};


page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.homeCreateView.init();
});

page('/forecast', () => {
    app.forecastCreateView.init();
  });

page('/feedback', () => {
  $('.page').hide();
  app.feedbackCreateView.init();
});

page('/about', () => {
    $('.page').hide();
    app.aboutCreateView.init();
});

page.start();