var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var todoTagView = Backbone.View.extend({

        template: _.template($('#todo-tag').html()),

        events: {
            'click a': 'showItem'
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showItem: function(event){

            event.preventDefault();
            this.$el.toggleClass('todo-list-show');

        }

    });

    todoMastic.views.todoTagView = todoTagView;
    todoMastic.todoTagView = new todoTagView();

}());