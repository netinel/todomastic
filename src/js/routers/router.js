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
            $('.create-new-btn').attr('href', '#new-note');
        },

        todo: function(){
            $('.create-new-btn').attr('href', '#new-todo');
        },

        showNote: function(id){
            console.log('showNote');
        },

        showTodo: function(id){

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