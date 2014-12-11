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

            todoMastic.events.trigger('loadNotes:load', function(){
                todoMastic.events.trigger('showList:render');
            });

            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Note';
        },

        todo: function(){
            todoMastic.events.trigger('activeTab:active', 1);
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Todo';
        },

        showNote: function(id){
            todoMastic.events.trigger('activeTab:active', 0);
            todoMastic.events.trigger('showTags:show');
            todoMastic.events.trigger('loadNotes:load');
            todoMastic.events.trigger('showNote:load', id);
            UITools.showSideBar(function(){});
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
            todoMastic.events.trigger('activeTab:active', 0);
            todoMastic.events.trigger('showTags:show');
            todoMastic.events.trigger('loadNotes:load');
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Note';
            todoMastic.events.trigger('crateNewNote:show');
        },

        newTodo: function(){
            todoMastic.actionType = 'Todo';
        },

        home: function(){

        }

    });

    todoMastic.TodoRouter = new TodoRouter();

})();