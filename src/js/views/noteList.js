var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var noteList = Backbone.View.extend({

        tagName: 'div',

        className: 'note-list',

        initialize: function(){

            _.bindAll(this, "render");

        },

        render: function() {

            return this;

        }

    });

    todoMastic.views.noteList = noteList;
    todoMastic.noteList = new noteList({collection: todoMastic.notes});

}());