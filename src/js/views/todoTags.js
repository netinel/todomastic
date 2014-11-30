var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var tagsView = Backbone.View.extend({

        el: "#todo-list",

        events: {
            'click .add-new-tag': 'addTag'
        },

        render: function() {

            this.$el.find('.tag-node').remove();

            this.collection.each(function(tagLineItem){

                var modelView = new todoMastic.views.todoTagView({model: tagLineItem});
                this.$el.find('.tag-content').append(modelView.render().el);

            }, this);

            return this;
        },

        addTag: function(event){
            event.preventDefault();
            todoMastic.newTag = new todoMastic.views.newTag({model:  new todoMastic.models.todoMastic()});
            $('.todo-app').append(todoMastic.newTag.render().el);
        }

    });

    todoMastic.tagView = new tagsView({collection: todoMastic.todoTagsCollection});

}());