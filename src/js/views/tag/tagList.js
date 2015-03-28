define(['jquery', 'underscore', 'backbone', 'collections/tag/tags', 'events/events'], function($, _, Backbone, Tags, events){

    var tagsListView = Backbone.View.extend({

        template: _.template($('#tags-list').html()),

        initialize: function(option){
            Tags.currentTagid = option.currentTagid;
            this.listenTo(Tags, "change reset add remove", this.updateTags);
            _.bindAll(this, 'render', 'getCurrentTag');
        },

        render: function() {

            var tagsList = {
                tag: this.currentTagid,
                list: []
            };

            Tags.each(function(tagLineItem){
                tagsList.list.push(tagLineItem.toJSON());
            });

            this.$el.html(this.template(tagsList));

            return this;

        },

        getCurrentTag: function(tagId){

            var tag = Tags.where({
                id: tagId.toString()
            });

            return tag;

        },

        updateTags: function(){
            events.trigger('showTags:add', this);
        }

    });

    return tagsListView;

});