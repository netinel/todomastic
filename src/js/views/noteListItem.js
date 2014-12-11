var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var noteQuickView = Backbone.View.extend({

        template: _.template($('#note-quick-view').html()),

        events: {
            'click .note-view': 'showNote',
            'click .remove-note': 'removeNote'
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showNote: function(event){
            event.preventDefault();

            var route = 'note/' + $(event.target).parent().data('id');
            todoMastic.TodoRouter.navigate(route, {trigger: true});

        },

        removeNote: function(event){
            event.preventDefault();
        }

    });

    todoMastic.views.noteQuickView = noteQuickView;
    todoMastic.noteQuickView = new noteQuickView();

}());