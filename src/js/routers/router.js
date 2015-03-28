define(['jquery', 'backbone', 'events/events', 'UITools', 'navigationView', 'views/tag/tags', 'views/note/noteList', 'views/note/newNote'], function($, Backbone, events, UITools, navigationView, tagsView, noteList, newNote){

    var TodoMasticRouter = Backbone.Router.extend({

        routes: {
            "note": "note",
            "todo": "todo",
            "note/:listId/:id": "showNote",
            "todo/:id": "showTodo",
            "settings": "settings",
            "new-note/:id": "newNote",
            "new-todo": "newTodo",
            "": "home"
        },

        note: function(){
            events.trigger('activeTab:active', 0);
            events.trigger('tags:show', this);
            events.trigger('showNotes:render', this);

            //events.trigger('showTags:show');
            /*events.trigger('loadNotes:load', function(){
                events.trigger('showList:render');
            });*/

            UITools.showSideBar(function(){});
            //todoMastic.actionType = 'Note';
        },

        todo: function(){
            /*events.trigger('activeTab:active', 1);
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Todo';*/
        },

        showNote: function(listId, id){
            events.trigger('activeTab:active', 0);
            events.trigger('tags:show', this);
            events.trigger('loadNotes:load', this);
            events.trigger('showNote:load', id);
            events.trigger('list:show', listId);
            /*events.trigger('showTags:show');
            events.trigger('loadNotes:load');*/
            UITools.showSideBar(function(){});
            //todoMastic.actionType = 'Note';
        },

        showTodo: function(id){
            //todoMastic.actionType = 'Todo';
        },

        settings: function(){
            /*events.trigger('activeTab:active', 2);
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Settings';*/
        },

        newNote: function(){
            /*events.trigger('activeTab:active', 0);
            events.trigger('showTags:show');
            events.trigger('loadNotes:load');
            UITools.showSideBar(function(){});
            todoMastic.actionType = 'Note';
            events.trigger('crateNewNote:show');*/
        },

        newTodo: function(){
            //todoMastic.actionType = 'Todo';
        },

        home: function(){

        }

    });

    return new TodoMasticRouter();

});