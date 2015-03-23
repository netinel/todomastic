require.config({
    paths: {
        jquery:             'libs/jquery',
        underscore:         'libs/underscore',
        backbone:           'libs/backbone',
        router:             'routers/router',
        navigationView:     'views/navigation'
    }
});

require(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, TodoRouter){
    Backbone.history.start();
});