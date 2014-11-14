var todoMastic = todoMastic || {};

(function(){

    var TodoRouter = Backbone.Router.extend({

        routes: {
            "note": "note",
            "todo": "todo",
            "note/:id": "showNote",
            "todo/:id": "showTodo",
            "settings": "settings",
            "new-note": "newNote",
            "new-todo": "newTodo",
            "": "note"
        },

        note: function(){
            todoMastic.actionType = 'Note';
        },

        todo: function(){
            todoMastic.actionType = 'Todo';
        },

        showNote: function(id){
            todoMastic.actionType = 'Note';
        },

        showTodo: function(id){
            todoMastic.actionType = 'Todo';
        },

        settings: function(){

        },

        newNote: function(){
            todoMastic.events.trigger('crateNewNote:show');
        },

        newTodo: function(){

        }

    });

    todoMastic.TodoRouter = new TodoRouter();

})();