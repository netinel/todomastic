define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    var note = Backbone.View.extend({

        template: _.template($('#note').html()),

        events: {
        },

        render: function() {

            this.$el.html(this.template(this.model.toJSON()));
            return this;

        }

    });

    return note;

});