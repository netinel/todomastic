define(['jquery', 'underscore', 'backbone', 'events/events', 'models/note/note', 'views/tag/tagList', 'collections/note/notes'], function($, _, Backbone, events, Note, TagList, Notes){

    var newNoteView = Backbone.View.extend({

        initialize: function(){

            _.bindAll(this, 'updateContent', 'show');
            events.on('crateNewNote:show', this.show, this);
            events.on('showNote:load', this.load, this);
            events.on('showTags:add', this.addTags, this);

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

            this.model = new Note();
            this.updateContent();

        },

        updateContent: function(){

            $('.todo-main-content').html(this.render().el);
            //$('.note-message').jqte();
            this.delegateEvents();
            this.addTags();

        },

        load: function(noteId){

            this.model = new Note({id: noteId});
            this.model.fetch({
                success: this.updateContent
            });

        },

        addTags: function(){

            var tagId = this.model.get('tagId') || 0;

            var tags = new TagList({
                //collection: todoMastic.todoTagsCollection,
                currentTagid: tagId
            });

            this.$el.find('.note-tag').replaceWith(tags.render().el.childNodes);

        },

        save: function(){

            var modelId = this.model.get('id');
            var currentNote = Notes.where({
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

            Notes.push(model);

        }

    });

    //todoMastic.views.newNoteView = newNoteView;
    //todoMastic.views.noteView = new newNoteView({model: todoMastic.note});

    return new newNoteView();

});