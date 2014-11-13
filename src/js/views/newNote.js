var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var newNoteView = Backbone.View.extend({

        initialize: function(){

            todoMastic.events.on('crateNewNote:show', this.show, this);

        },

        template: _.template($('#new-note').html()),

        events: {

        },

        render: function(){

            this.$el.html(this.template());
            return this;

        },

        show: function(){

            $('.todo-main-content').html(this.render().el);

        }

    });

    todoMastic.views.newNoteView = newNoteView;
    todoMastic.views.newNoteView = new newNoteView();

}());