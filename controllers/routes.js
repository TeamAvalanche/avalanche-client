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

// page('/weather', () => {
//     $('.page').hide();
//     app.//add stuff
// });

// page('/danger', () => {
//     $('.page').hide();
//     app.//add stuff
// });

// page('/problems', () => {
//     $('.page').hide();
//     app.//add stuff
// });

page('/feedback', () => {
    $('.page').hide();
    app.feedbackCreateView.init();
});

page.start();