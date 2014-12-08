var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var noteQuickView = Backbone.View.extend({

        template: _.template($('#note-quick-view').html()),

        events: {
            'click .note-item': 'showNote'
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showNote: function(event){
            event.preventDefault();

        }

    });

    todoMastic.views.noteQuickView = noteQuickView;
    todoMastic.noteQuickView = new noteQuickView();

}());