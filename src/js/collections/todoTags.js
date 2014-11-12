var todoMastic = todoMastic || {};

(function(){

    var TodoTags = Backbone.Collection.extend({
        model: todoMastic.models.todoMastic
    });

    todoMastic.todoTagsCollection = new TodoTags([
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
        },
        {
            id: 1,
            tagTitle: 'UI design',
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
        },
        {
            id: 2,
            tagTitle: 'Backend',
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
    ]);

})();