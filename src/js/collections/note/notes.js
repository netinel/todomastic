define(['jquery', 'underscore', 'backbone', 'models/note/note', 'events/events'], function($, _, Backbone, note, events){

    var notes = Backbone.Collection.extend({

        model: note,

        url: 'http://api.onebackend.com/index/notestag',

        initialize: function(){

            events.on('loadNotes:load', this.load, this);

        },

        getNotesByTagId: function(tagId){

            return this.where({tagId: tagId});

        },

        load: function(onFetch){

            $.when(this.fetch()).done(function(){
                if(typeof onFetch === 'function'){
                    onFetch();
                }
            });

        }

    });

    return new notes();

});