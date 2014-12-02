var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var newNoteView = Backbone.View.extend({

        initialize: function(){

            _.bindAll(this, "show");
            todoMastic.events.on('crateNewNote:show', this.show, this);
            todoMastic.events.on('showNote:load', this.load, this);

        },

        events: {
            'click .save' : 'save'
        },

        template: _.template($('#new-note').html()),

        render: function(){

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        show: function(){

            $('.todo-main-content').html(this.render().el);
            $('.note-message').jqte();

        },

        load: function(noteId){

            this.model = new todoMastic.models.note({id: noteId});
            //console.log(this);
            this.model.fetch({
                success: this.show
            });
            //console.log(this.model.toJSON());
            this.show();

        },

        save: function(){

        }

    });

    todoMastic.views.newNoteView = newNoteView;
    todoMastic.views.newNoteView = new newNoteView();

}());