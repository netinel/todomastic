define(['jquery', 'underscore', 'backbone', 'events/events', 'collections/tag/tags', 'views/tag/tag', 'views/tag/newTagItem', 'models/tag/tag'], function($, _, Backbone, events, Tags, Tag, TagItem, TagModel){

    var tagsView = Backbone.View.extend({

        el: "#todo-list",

        events: {
            'click .add-new-tag': 'addTag'
        },

        initialize: function(){
            events.on('tags:show', this.showTags, this);
            events.on('tags:updateList', this.updateList, this);
            events.on('list:show', this.initActiveList, this);
        },

        render: function(collection, router) {

            var listId = this.activeList;
            var currentList;

            this.$el.find('.tag-node').remove();
            collection.each(function(tagLineItem){

                var modelView = new Tag({model: tagLineItem, router: router});

                this.$el.find('.tag-content').append(modelView.render().el);

                if(tagLineItem.id == listId){
                    currentList = modelView;
                }

            }, this);

            currentList.expendList(listId);

            return this;

        },

        showTags: function(router, listId){

            var _this = this;
            Tags.fetch({reset:true}).done(function(){
                _this.render(Tags, router);
            });

        },

        showList: function(listId){

            var activeList = listId || this.activeList;
            console.log('das');
            console.log( this.$el.find('a#' + activeList).parents('.tag-node'));
            this.$el.find('a#' + activeList).parents('.tag-node').toggleClass('todo-list-show');

        },

        addTag: function(event){
            event.preventDefault();

            var tag = new TagItem({model: new TagModel});
            $('.todo-app').append(tag.render().el);

        },

        initActiveList: function(listId){
            this.activeList = listId;
        },

        updateList: function(){
            this.render(Tags);
        }

    });

    return new tagsView();

});