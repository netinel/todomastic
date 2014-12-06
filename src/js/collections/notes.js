var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var notes = Backbone.Collection.extend({

        model: todoMastic.models.note,

        url: 'http://api.onebackend.com/index/notestag',

        initialize: function(){

            todoMastic.events.on('loadNotes:load', this.load, this);

        },

        getNotesByTagId: function(tagId){

            return this.where({tagId: tagId});

        },

        load: function(){

            this.fetch();

        }

    });

    todoMastic.collections.notes = notes;
    todoMastic.notes = new notes();

})();