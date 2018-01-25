'use strict';

var app = app || {};

(module => {

  let homeCreateView = {};

  const $view = $('#home-page');

  homeCreateView.init = () => {
    app.homeCreateView.randomReview();
    $view.show();
  };

  homeCreateView.displayOneReview = () => {
    app.Feedback.fetchOne(1, function(data) {
      $('#random-review').empty();
      for (let i = 0; i < data.rating; i++) {
        $('#random-review').append(`
        <i class="fa fa-star" aria-hidden="true"></i>
      `);
      }
      $('#random-review').append(`
        <p>"${data.comments}"</p>
        <h4>-${data.name}</h4>
      `);
    });
  };

  homeCreateView.randomReview = () => {
    app.Feedback.fetchAll(function(data) {
      let array = data;
      let randomItem = array[Math.floor(Math.random() * array.length)];
      $('#random-review').empty();
      for (let i = 0; i < randomItem.rating; i++) {
        $('#random-review').append(`
        <i class="fa fa-star" aria-hidden="true"></i>
      `);
      }
      $('#random-review').append(`
        <p>"${randomItem.comments}"</p>
        <h4>-${randomItem.name}</h4>
      `);
    });
  };

  module.homeCreateView = homeCreateView;

})(app);