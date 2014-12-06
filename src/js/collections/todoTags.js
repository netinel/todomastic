var todoMastic = todoMastic || {};

(function(){

    var TodoTags = Backbone.Collection.extend({

        model: todoMastic.models.todoMastic,

        url: 'http://api.onebackend.com/index/tags',

        initialize: function(){

            this.on('reset add', function(event){

                todoMastic.tagView.render();
                todoMastic.events.trigger('showTags:add');

            });

            todoMastic.events.on('showTags:show', this.show, this);

        },

        show: function(){

            this.fetch({
                reset: false,
                success: function(){

                    todoMastic.tagView.render();

                }
            });

        }

    });

    todoMastic.todoTagsCollection = new TodoTags();

})();