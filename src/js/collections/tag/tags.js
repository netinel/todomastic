define(['jquery', 'underscore', 'backbone', 'events/events', 'models/tag/tag'], function($, _, Backbone, events, tagModel){

    var tags = Backbone.Collection.extend({

        model: tagModel,

        url: 'http://api.onebackend.com/index/tags',

        initialize: function(){
            this.on('reset add', function(event){
                //todoTags.render();
                //events.trigger('showTags:add');
            });

            //events.on('showTags:show', this.show, this);

        },

        show: function(){

            this.fetch({
                reset: false,
                success: function(){
                    //todoTags.render();
                }
            });

        }

    });

    return new tags();

});