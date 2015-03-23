define(['jquery', 'underscore', 'backbone', 'views/note'], function($, _, Backbone, noteView){

    var notesView = Backbone.View.extend({

        el: _.template($('#notes-list').html()),

        initialize: function(option){

            this.tagId = option.tagId;
            _.bindAll(this, "render");

        },

        render: function() {

            var tagId = this.tagId;

            _.each(this.collection.getNotesByTagId(tagId), function(noteLineItem){

                var modelView = new noteView({model: noteLineItem});
                this.$el.append(modelView.render().el.childNodes);

            }, this);

            return this;
        }
    });

    return notesView;

});