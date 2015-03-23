define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    var note = Backbone.Model.extend({

        defaults: {
            id: 0,
            title: '',
            tagId: '',
            note: '',
            date: new Date().getTime()
        },

        urlRoot: 'http://api.onebackend.com/entity/note/'

    });

    return note;

});