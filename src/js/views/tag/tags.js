define(['jquery', 'underscore', 'backbone', 'events/events', 'collections/tag/tags', 'views/tag/tag', 'views/tag/newTagItem', 'models/tag/tag'], function($, _, Backbone, events, Tags, Tag, TagItem, TagModel){

    var tagsView = Backbone.View.extend({

        el: "#todo-list",

        events: {
            'click .add-new-tag': 'addTag'
        },

        initialize: function(){
            events.on('tags:show', this.showTags, this);
            events.on('tags:updateList', this.updateList, this);
        },

        render: function(collection, router) {

            this.$el.find('.tag-node').remove();
            collection.each(function(tagLineItem){

                var modelView = new Tag({model: tagLineItem, router: router});
                this.$el.find('.tag-content').append(modelView.render().el);

            }, this);

            return this;
        },

        showTags: function(router){

            var _this = this;
            Tags.fetch({reset:true}).done(function(){
                _this.render(Tags, router);
            });

        },

        addTag: function(event){
            event.preventDefault();

            var tag = new TagItem({model: new TagModel});
            $('.todo-app').append(tag.render().el);
        },

        updateList: function(){
            this.render(Tags);
        }

    });

    return new tagsView();

});