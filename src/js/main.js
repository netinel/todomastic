/**
 * Created by Dmytro on 17.09.2014.
 */

var UITools = {

    TodoList: {

        $cache: {
            listElem: '',
            listElemBtn: ''
        },

        event: function(){

            this.$cache.listElemBtn.on('click', function(event){
                event.preventDefault();
                $(this).parent().toggleClass('todo-list-show');
            });

        },

        init: function(){
            this.$cache.listElem = $('.todo-list-elem');
            this.$cache.listElemBtn = this.$cache.listElem.find('a');
            this.event();
        }

    }

};

$(function(){

    UITools.TodoList.init();

});