var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var tagsListView = Backbone.View.extend({

        template: _.template($('#tags-list').html()),

        initialize: function(option){
            this.currentTagid = option.currentTagid;
            _.bindAll(this, 'render', 'getCurrentTag');
        },

        events: {
        },

        render: function() {

            var tagsList = {
                tag: this.currentTagid,
                list: []
            }

            this.collection.each(function(tagLineItem){
                tagsList.list.push(tagLineItem.toJSON());
            });

            this.$el.html(this.template(tagsList));

            return this;

        },

        getCurrentTag: function(tagId){

            var tag = this.collection.where({
                id: tagId.toString()
            });

            return tag;

        }

    });

    todoMastic.tagsListView = tagsListView;

}());