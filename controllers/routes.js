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

// page('/weather', () => {
//     $('.page').hide();
//     app. //add stuff
// });

// page('/danger', () => {
//     $('.page').hide();
//     app. //add stuff
// });

// page('/problems', () => {
//     $('.page').hide();
//     app. //add stuff
// });

page('/feedback', () => {
  $('.page').hide();
  app.feedbackCreateView.init();
});

page.start();