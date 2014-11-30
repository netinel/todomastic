var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};
todoMastic.events = todoMastic.events || {};

(function(){

    var navigationView = Backbone.View.extend({

        el: '#todo-nav',

        initialize: function(){
            
            todoMastic.events.on('activeTab:active', this.active, this);

        },

        active: function(tabIndex){
            var $tabs = this.$el.find('li a');
            $tabs.removeClass('active');
            $tabs.eq(tabIndex).addClass('active');
        }

    });

    todoMastic.views.navigationView = navigationView;
    todoMastic.views.navigationView = new navigationView();

}());