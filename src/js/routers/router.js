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
            "": "home"
        },

        note: function(){
            todoMastic.events.trigger('activeTab:active', 0);
            todoMastic.events.trigger('showTags:show');
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Note';
        },

        todo: function(){
            todoMastic.events.trigger('activeTab:active', 1);
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Todo';
        },

        showNote: function(id){
            todoMastic.actionType = 'Note';
        },

        showTodo: function(id){
            todoMastic.actionType = 'Todo';
        },

        settings: function(){
            todoMastic.events.trigger('activeTab:active', 2);
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Settings';
        },

        newNote: function(){
            todoMastic.events.trigger('crateNewNote:show');
        },

        newTodo: function(){

        },

        home: function(){

        }

    });

    todoMastic.TodoRouter = new TodoRouter();

})();