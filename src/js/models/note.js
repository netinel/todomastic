var todoMastic = todoMastic || {};
todoMastic.models = todoMastic.models || {};
todoMastic.views = todoMastic.views || {};
todoMastic.collections = todoMastic.collections || {};

(function(){

    var noteModel = Backbone.Model.extend({

        defaults: {
            id: 0,
            title: '',
            tagId: '',
            note: '',
            date: ''
        },

        urlRoot: 'http://api.onebackend.com/entity/note/'

    });

    todoMastic.models.note = noteModel;
    todoMastic.note = new todoMastic.models.note();

}());