define(['jquery', 'underscore', 'backbone', 'events/events', 'collections/note/notes', 'views/note/noteShortView'], function($, _, Backbone, events, Notes, NoteView){

    var noteList = Backbone.View.extend({

        tagName: 'div',

        attributes: {
            'data-listId': ''
        },

        className: 'note-list',

        initialize: function(){
            events.on('showList:render', this.showList, this);
            events.on('showNotes:render', this.showList, this);
            events.on('removeItem:remove', this.removeItem, this);
            events.on('loadNotes:load', this.loadNotes, this);
            _.bindAll(this, "render");

        },

        render: function(router) {

            var router = router;

            this.$el.empty();

            Notes.each(function(noteLineItem){

                var modelView = new NoteView({model: noteLineItem, router: router});
                this.$el.append(modelView.render().el);

            }, this);

            return this;

        },

        loadNotes: function(router){
            Notes.fetch({reset:true, router: router});
        },

        showList: function(router){

            var _this = this,
                router = router;

            Notes.fetch({reset:true, router: router}).done(function(data, textStatus, jqXHR){
                $('.todo-main-content').html(_this.render(router).el);
                _this.attributes['data-listId'] = Notes.models[0].attributes.tagId;
            });

        },

        removeItem: function(noteId){

            var note = Notes.where({noteId: noteId});
            Notes.remove(note);

        }

    });

    return new noteList();

});