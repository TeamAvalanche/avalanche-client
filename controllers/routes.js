'use strict';

var app = app || {};


page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a92cd57c972e4a38e9729afa3c3d2762fd8a1df
// });

page('/feedback', () => {
  $('.page').hide();
  app.feedbackCreateView.init();
});

page.start();