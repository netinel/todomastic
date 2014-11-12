var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var todoTagView = Backbone.View.extend({

        template: _.template($('#todo-tag').html()),

        events: {
            'click a.list-item'   : 'showItem',
            'click li'  : 'viewNote'
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showItem: function(event){

            event.preventDefault();
            this.$el.toggleClass('todo-list-show');

        },

        viewNote: function(event){

            var route = 'note/' + $(event.target).attr('id');
            todoMastic.TodoRouter.navigate(route, {trigger: true});
            
        }

    });

    todoMastic.views.todoTagView = todoTagView;
    todoMastic.todoTagView = new todoTagView();

}());