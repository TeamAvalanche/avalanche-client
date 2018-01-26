'use strict';

var app = app || {};

if (window.location.pathname !== '/') {
  page.base('/avalanche-client');
}

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

page('/thanks', () => {
  $('.page').hide();
  app.thankYou.init();
});

page.start();