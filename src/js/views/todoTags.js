var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var tagsView = Backbone.View.extend({

        el: "#todo-list",

        render: function() {
            this.collection.each(function(tagLineItem){

                var modelView = new todoMastic.views.todoTagView({model: tagLineItem});
                this.$el.append(modelView.render().el);

            }, this);

            return this;
        }
    });

    todoMastic.tagView = new tagsView({collection: todoMastic.todoTagsCollection});

}());