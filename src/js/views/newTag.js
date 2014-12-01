var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var newTag = Backbone.View.extend({

        template: _.template($('#new-tag').html()),

        className: 'overlay-view',

        initialize: function(){

            this.on('render', function(){
                var currentThis = this;

                var $popup = this.$el.find('.new-tag-form');

                this.$el.fadeIn(500, function(){
                    $popup.css('opacity', 1);
                    currentThis.setCenter();
                });

            });

        },

        events: {
            'click .close-popup': 'cancel',
            'change input.tag-name': 'updateTag',
            'click button.add-tag': 'addTag'
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            this.trigger('render');
            return this;

        },

        cancel: function(event){
            event.preventDefault();
            this.undelegateEvents();
            this.$el.removeData().unbind();
            this.remove();
        },

        setCenter: function(){

            this.$el.find('.new-tag-form').css({
                'top': ($('.todo-app').height() / 2) - (this.$el.find('.new-tag-form').height() / 2),
                'left': ($('.todo-app').width() / 2) - (this.$el.find('.new-tag-form').width() / 2)
            });

        },

        updateTag: function(event){
            this.model.set({'name': $(event.currentTarget).val()});
        },

        addTag: function(event){
            event.preventDefault();
            this.model.set({'id': new Date().getTime()});
            todoMastic.todoTagsCollection.push(this.model);
            this.$el.fadeOut(300, function(){$(this).remove();})
        }

    });

    todoMastic.views.newTag = newTag;

}());