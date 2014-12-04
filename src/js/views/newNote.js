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
            todoMastic.events.on('showTags:add', this.addTags, this);

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
            this.addTags();
        },

        load: function(noteId){

            this.model = new todoMastic.models.note({id: noteId});
            this.model.fetch({
                success: this.show
            });

        },

        addTags: function(){
            var tagId = this.model.get('tagId') || 0;
            var tags = new todoMastic.tagsListView({collection: todoMastic.todoTagsCollection, currentTagid: tagId});
            this.$el.find('.note-tag').replaceWith(tags.render().el.childNodes);
        },

        save: function(){

        }

    });

    todoMastic.views.newNoteView = newNoteView;
    todoMastic.views.noteView = new newNoteView({model: todoMastic.note});

}());