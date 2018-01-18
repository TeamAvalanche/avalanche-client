'use strict';

var app = app || {};

(module => {

    const _API_URL_ = 'http://localhost:3000';

    function Feedback() {}

    function errorCalback(err) {
        console.error(err);
        // app.errorView.initErrorPage(err);
    }

    Feedback.fetchAll = () => $.getJSON(_API_URL_ + '/api/v1/feedback').done(function( json ) {
        console.log( "JSON Data: ", json);
    })
        .catch(errorCalback);

    module.Feedback = Feedback;
})(app);