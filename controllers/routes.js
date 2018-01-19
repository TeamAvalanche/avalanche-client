'use strict';

var app = app || {};

page('/*', (ctx, next) => {
    $('.page').hide();
    next();
});

page('/feedback/', () => app.feedbackCreateView.init());

