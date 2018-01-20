'use strict';

var app = app || {};

(module => {

  let homeCreateView = {};

  const $view = $('#home-page');

  homeCreateView.init = () => {
    homeCreateView.randomReview();
    $view.show();
  };

  homeCreateView.randomReview = () => {
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

  module.homeCreateView = homeCreateView;

})(app);