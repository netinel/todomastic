define(['jquery', 'underscore', 'backbone', '../collections/tag/tags', '../models/tag/tag', 'tag/todoTag', 'tag/newTag'], function($, _, Backbone, todoTags, tagModel, todoTag, newTag){

    var tagsView = Backbone.View.extend({

        el: "#todo-list",

        events: {
            'click .add-new-tag': 'addTag'
        },

        initialize: function(){
            console.log(this.collection);
        },

        render: function() {

            this.$el.find('.tag-node').remove();
            this.collection.each(function(tagLineItem){

                var modelView = new todoTag({model: tagLineItem});
                this.$el.find('.tag-content').append(modelView.render().el);

            }, this);

            return this;
        },

        addTag: function(event){
            event.preventDefault();
            var tag = new newTag({model: new tagModel});
            $('.todo-app').append(tag.render().el);
        }

    });

    return new tagsView({collection: tags});

});