'use strict';

var app = app || {};

if (window.location.pathname !== '/') {
  page.base('/gh-plus-page-test'); // place our web address here once we deploy to GH pages
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

page.start();