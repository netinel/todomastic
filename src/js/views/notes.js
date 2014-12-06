var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var notesView = Backbone.View.extend({

        el: _.template($('#notes-list').html()),

        initialize: function(option){

            this.tagId = option.tagId;
            _.bindAll(this, "render");

        },

        render: function() {

            var tagId = this.tagId;

            _.each(this.collection.getNotesByTagId(tagId), function(noteLineItem){

                var modelView = new todoMastic.views.note({model: noteLineItem});
                this.$el.append(modelView.render().el.childNodes);

            }, this);

            return this;
        }
    });

    todoMastic.views.notesView = notesView;
    //todoMastic.notesView = new notesView({collection: todoMastic.notes});

}());