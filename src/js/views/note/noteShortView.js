define(['jquery', 'underscore', 'backbone', 'events/events'], function($, _, Backbone, events){

    var noteQuickView = Backbone.View.extend({

        template: _.template($('#note-quick-view').html()),

        events: {
            'click .note-view': 'showNote',
            'click .remove-note': 'removeNote'
        },

        initialize: function(option){
            this.router = option.router;
        },

        render: function() {
            
            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showNote: function(event){
            event.preventDefault();

            if(!$(event.target).is('a')){
                var route = 'note/' + this.model.attributes.tagId + '/' + this.model.get('noteId');
                this.router.navigate(route, {trigger: true});
            }

        },

        removeNote: function(event){
            event.preventDefault();

            var noteId = this.model.get('noteId');

            this.$el.fadeOut(300, function(){
                events.trigger('removeItem:remove', noteId);
            });

        }

    });

    return noteQuickView;

});