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

page('/feedback', () => app.feedbackCreateView.init());

page.start();