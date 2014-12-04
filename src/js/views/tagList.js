var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var tagsListView = Backbone.View.extend({

        template: _.template($('#tags-list').html()),

        initialize: function(option){
            this.currentTagid = option.currentTagid;
            _.bindAll(this, "render");
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

        }

    });

    todoMastic.tagsListView = tagsListView;

}());