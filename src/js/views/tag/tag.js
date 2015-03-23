define(['jquery', 'underscore', 'backbone', 'router', 'views/notes', 'collections/note/notes'], function($, _, Backbone, router, notesView, notes){

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

            this.$el.toggleClass('todo-list-show');

            if(this.$el.hasClass('todo-list-show')){

                var noteView = new notesView({
                    collection: notes,
                    tagId: $(event.target).attr('id')
                });

                this.$el.find('ul').replaceWith(noteView.render().el);
            }

        },

        viewNote: function(event){

            var route = 'note/' + $(event.target).attr('id');
            this.router.navigate(route, {trigger: true});

        }

    });

    return tagView;

});