define(['jquery', 'underscore', 'backbone', 'collections/tag/tags'], function($, _, Backbone, Tags){

    var tagsListView = Backbone.View.extend({

        template: _.template($('#tags-list').html()),

        initialize: function(option){
            this.currentTagid = option.currentTagid;
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

        }

    });

    return tagsListView;

});