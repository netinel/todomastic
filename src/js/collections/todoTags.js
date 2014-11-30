var todoMastic = todoMastic || {};

(function(){

    var TodoTags = Backbone.Collection.extend({

        model: todoMastic.models.todoMastic,

        url: 'http://api.onebackend.com/index/tags',

        initialize: function(){

            this.on('reset add', function(event){
                todoMastic.tagView.render();
            });

            todoMastic.events.on('showTags:show', this.show, this);

        },

        initializeNotes: function(){

            $.ajax({
                url: 'http://api.onebackend.com/index/notestag'
            }).done(function(data){

                todoMastic.todoTagsCollection.each(function(model){

                    model.set('list', _.where(data, {
                        tagId: model.get('id')
                    }));

                });

                todoMastic.tagView.render();

            });

        },

        show: function(){

            this.fetch({
                reset: false,
                success: function(){
                    todoMastic.todoTagsCollection.initializeNotes();
                }
            });

        }

    });

    todoMastic.todoTagsCollection = new TodoTags();

})();