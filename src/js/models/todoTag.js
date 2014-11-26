var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var todoTagModel = Backbone.Model.extend({

        defaults: {
            id: 0,
            name: 'Title',
            list: []
        }

    });

    todoMastic.models.todoMastic = todoTagModel;
    todoMastic.todoTagModel = new todoMastic.models.todoMastic();

}());