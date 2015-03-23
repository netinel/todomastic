define(['jquery', 'underscore', 'backbone', 'events/events'], function($, _, Backbone, events){

    var navigationView = Backbone.View.extend({

        el: '#todo-nav',

        initialize: function(){

            events.on('activeTab:active', this.active, this);

        },

        active: function(tabIndex){

            var $tabs = this.$el.find('li a');
            $tabs.removeClass('active');
            $tabs.eq(tabIndex).addClass('active');

        }

    });

    return new navigationView();

});