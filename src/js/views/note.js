var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var note = Backbone.View.extend({

        template: _.template($('#note').html()),

        events: {
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        }

    });

    todoMastic.views.note = note;
    todoMastic.noteView = new note();

}());