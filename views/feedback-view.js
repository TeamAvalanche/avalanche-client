'use strict';

var app = app || {};

(module => {
    let feedbackCreateView = {};

    feedbackCreateView.init = () => {
        $('#feedback-page').show();
    };

    $('#feedback-form').on('submit', function (e) {
        e.preventDefault();
        let feedback = {
            name: $('#name').val(),
            email: $('#email').val(),
            location: $('#location').val(),
            comments: $('#comments').val(),
            rating: $('#rating').val()
        };
        app.Feedback.create(feedback).then(() => console.log("Feedback page"));
    });
    module.feedbackCreateView = feedbackCreateView;

})(app);