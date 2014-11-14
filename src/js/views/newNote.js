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

        events: {
            'click .save' : 'save'
        },

        template: _.template($('#new-note').html()),

        render: function(){

            this.$el.html(this.template());
            return this;

        },

        show: function(){

            $('.todo-main-content').html(this.render().el);

        },

        save: function(){

        }

    });

    todoMastic.views.newNoteView = newNoteView;
    todoMastic.views.newNoteView = new newNoteView();

}());