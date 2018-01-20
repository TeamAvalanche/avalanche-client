'use strict';

var app = app || {};

(module => {
    let aboutCreateView = {};

    aboutCreateView.init = () => {
        $('#about-page').show();
    };

    module.aboutCreateView = aboutCreateView;

})(app);