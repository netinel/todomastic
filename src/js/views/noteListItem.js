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

            if(!$(event.target).is('a')){
                var route = 'note/' + this.model.get('noteId');
                todoMastic.TodoRouter.navigate(route, {trigger: true});
            }

        },

        removeNote: function(event){
            event.preventDefault();

            var noteId = this.model.get('noteId');

            this.$el.fadeOut(300, function(){
                todoMastic.events.trigger('removeItem:remove', noteId);
            });

        }

    });

    todoMastic.views.noteQuickView = noteQuickView;
    todoMastic.noteQuickView = new noteQuickView();

}());