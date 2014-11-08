var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var todoTagView = Backbone.View.extend({

        template: _.template($('#todo-tag').html()),

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        }

    });

    todoMastic.views.todoTagView = todoTagView;
    todoMastic.todoTagView = new todoTagView();

}());