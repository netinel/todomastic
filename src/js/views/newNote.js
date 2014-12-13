var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var newNoteView = Backbone.View.extend({

        initialize: function(){

            _.bindAll(this, 'updateContent', 'show');
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

            this.model = new todoMastic.models.note();
            this.updateContent();

        },

        updateContent: function(){

            $('.todo-main-content').html(this.render().el);
            $('.note-message').jqte();
            this.delegateEvents();
            this.addTags();

        },

        load: function(noteId){

            this.model = new todoMastic.models.note({id: noteId});
            this.model.fetch({
                success: this.updateContent
            });

        },

        addTags: function(){

            var tagId = this.model.get('tagId') || 0;

            var tags = new todoMastic.tagsListView({
                collection: todoMastic.todoTagsCollection,
                currentTagid: tagId
            });

            this.$el.find('.note-tag').replaceWith(tags.render().el.childNodes);

        },

        save: function(){
            
            var modelId = this.model.get('id');
            var currentNote = todoMastic.notes.where({
                noteId: modelId.toString()
            });
            var model = {};

            if(currentNote.length > 0){

                model = currentNote[0];

                model.set({
                    title: this.$el.find('.note-title input').val(),
                    tagId: this.$el.find('.note-tag option:selected').attr('id').toString(),
                    note: this.$el.find('.note-message').val()
                });

            }
            else{

                this.model.set({
                    id: new Date().getTime().toString(),
                    title: this.$el.find('.note-title input').val(),
                    tagId: this.$el.find('.note-tag option:selected').attr('id').toString(),
                    note: this.$el.find('.note-message').val(),
                    noteId: new Date().getTime(),
                    type: 'notetag'
                });

                model = this.model;

            }

            todoMastic.notes.push(model);

        }

    });

    todoMastic.views.newNoteView = newNoteView;
    todoMastic.views.noteView = new newNoteView({model: todoMastic.note});

}());