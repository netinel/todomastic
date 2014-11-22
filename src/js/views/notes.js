var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var notesView = Backbone.View.extend({

        el: "#main-content",

        render: function() {
            this.collection.each(function(noteLineItem){

                var modelView = new todoMastic.views.note({model: noteLineItem});
                this.$el.append(modelView.render().el);

            }, this);

            return this;
        }
    });

    todoMastic.notesView = new notesView({collection: todoMastic.notesCollection});

}());