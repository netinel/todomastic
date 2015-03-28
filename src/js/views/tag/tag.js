define(['jquery', 'underscore', 'backbone', 'router', 'views/notes', 'collections/note/notes', 'events/events'], function($, _, Backbone, router, notesView, notes, events){

    var tagView = Backbone.View.extend({

        template: _.template($('#todo-tag').html()),

        className: 'tag-node',

        events: {
            'click a.list-item' : 'showItem',
            'click li' : 'viewNote'
        },

        initialize: function(option){
            this.router = option.router;
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        },

        showItem: function(event){

            event.preventDefault();
            this.expendList();

        },

        expendList: function(){

            this.$el.toggleClass('todo-list-show');

            if(this.$el.hasClass('todo-list-show')){

                var noteView = new notesView({
                    collection: notes,
                    tagId: this.$el.find('a').attr('id')
                });

                this.$el.find('ul').replaceWith(noteView.render().el);
            }

        },

        viewNote: function(event){
            event.preventDefault();

            var listId = $(event.target).parents('.todo-list-elem').find('a').attr('id');
            var route = 'note/' + listId + '/' + $(event.target).attr('id');
            this.router.navigate(route, {trigger: true});

        }

    });

    return tagView;

});