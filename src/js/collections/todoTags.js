var todoMastic = todoMastic || {};

(function(){

    var TodoTags = Backbone.Collection.extend({

        model: todoMastic.models.todoMastic,

        url: 'http://api.onebackend.com/index/tags',

        initialize: function(){

            this.on('reset', function(event){
                todoMastic.tagView.render();
            });

        }

    });

    todoMastic.todoTagsCollection = new TodoTags();

    todoMastic.todoTagsCollection.fetch({
        reset: false,
        success: function(){
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
        }
    });

})();