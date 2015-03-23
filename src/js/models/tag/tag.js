define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    var tagModel = Backbone.Model.extend({

        defaults: {
            id: 0,
            name: 'Title',
            list: []
        }

    });

    return tagModel;

});