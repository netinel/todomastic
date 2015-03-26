define(['jquery'], function($){

    var UITools = {

        $cache: {
            todoList: $('#todo-list')
        },

        showSideBar: function(onComplete){

            UITools.$cache.todoList.animate({
                width: 246
            }, 500, onComplete);

        }

    };

    return UITools

});
