'use strict';

var app = app || {};


page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.Location.fetchRegion('olympics').then(info => {
    console.log('location in route.js ', info);
    app.homeCreateView.init();
  }).catch(err => console.log(err));
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