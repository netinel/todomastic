var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var actionBarView = Backbone.View.extend({

        el: '#todo-action',

        events: {
            'click .refresh-btn' : 'refresh',
            'click .create-new-btn' : 'createNewItem',
            'click .logout-btn' : 'logout'
        },

        initialize: function(){

        },

        refresh : function(event){
            event.preventDefault();
        },

        createNewItem : function(event){
            event.preventDefault();

            var URL = 'new-note/' + (new Date().getTime());

            if(todoMastic.actionType == 'Note'){
                todoMastic.TodoRouter.navigate(URL, {trigger: true, replace: true});
            }

        },

        logout : function(event){
            event.preventDefault();
        }

    });

    todoMastic.views.actionBarView = actionBarView;
    todoMastic.views.actionBarView = new actionBarView();

}());