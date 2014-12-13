var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var noteList = Backbone.View.extend({

        tagName: 'div',

        className: 'note-list',

        initialize: function(){

            todoMastic.events.on('showList:render', this.showList, this);
            todoMastic.events.on('removeItem:remove', this.removeItem, this);
            _.bindAll(this, "render");

        },

        render: function() {

            this.$el.empty();

            this.collection.each(function(noteLineItem){

                var modelView = new todoMastic.views.noteQuickView({model: noteLineItem});
                this.$el.append(modelView.render().el);

            }, this);

            return this;

        },

        showList: function(){

            $('.todo-main-content').html(this.render().el);

        },

        removeItem: function(noteId){

            var note = this.collection.where({noteId: noteId});
            this.collection.remove(note);

        }

    });

    todoMastic.views.noteList = noteList;
    todoMastic.noteList = new noteList({collection: todoMastic.notes});

}());