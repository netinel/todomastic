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
    todoMastic.todoTagsCollection.fetch({reset: true});

    /*todoMastic.todoTagsCollection = new TodoTags([
        {
            id: 0,
            tagTitle: 'Products',
            list: [
                {
                    id: 0,
                    title: 'TodoApplication'
                },
                {
                    id: 1,
                    title: 'Onebackend SDK'
                },
                {
                    id: 2,
                    title: 'Mobile application'
                }
            ]
        }
    ]);*/

})();