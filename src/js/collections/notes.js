var todoMastic = todoMastic || {};

(function(){

    var notes = Backbone.Collection.extend({
        model: todoMastic.models.todoMastic
    });

    todoMastic.notesCollection = new notes([
        {
            id: 0,
            title: 'Test note',
            tagId: '1231',
            content: '<h1>Test note content</h1>',
            creationDate: '10/10/2012'
        }
    ]);

})();