'use strict';

var app = app || {};

(module => {
  let feedbackCreateView = {};

  feedbackCreateView.init = () => {
    $('#feedback-page').show();
  };

  $('#feedback-form').on('submit',(e) => {
    e.preventDefault();
    console.log('this is after you hit submit if feedback form');
    let feedback = {
      name: $('#name').val(),
      email: $('#email').val(),
      location: $('#location').val(),
      comments: $('#comments').val(),
      rating: parseInt($('input:checked').val())
    };
    console.log(feedback);

    app.Feedback.create(feedback)
      .then( () => {
        clearFields();
      });
  });
  module.feedbackCreateView = feedbackCreateView;

})(app);

function clearFields() {
  $('#name').val("");
  $('#email').val("");
  $('#location').val("");
  $('#comments').val("");
  $('#rating').val("");
}