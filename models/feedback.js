'use strict';

var app = app || {};

(module => {

  const _API_URL_ = 'http://localhost:3000';

  function Feedback() { }

  function errorCallback(err) {
    console.error(err);
    // app.errorView.initErrorPage(err);
  }

  Feedback.fetchAll = () => $.getJSON(_API_URL_ + '/api/v1/feedback').done(function (json) {
    console.log("JSON Data: ", json);
  })
    .catch(errorCallback);

  Feedback.create = feedback => {
    console.log('feedback created from: ' + feedback.name);
    return $.post(_API_URL_ + '/api/v1/feedback', feedback).catch(errorCallback);
  };

  Feedback.deleteOne = id => {
    return $.ajax({
      url: _API_URL_ + '/api/v1/feedback/' + id,
      method: 'DELETE'
    }).catch(errorCallback);
  };

  Feedback.update = feedback => {
    return $.ajax({
      url: _API_URL_ + '/api/v1/feedback/' + feedback.name,
      method: 'PUT',
      data: feedback
    })
      .then(data => console.log(data))
      .catch(errorCallback);
  };

  module.Feedback = Feedback;
  
})(app);