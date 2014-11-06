var todoMastic = todoMastic || {};

var Group = Backbone.Model.extend({});

var GroupView = Backbone.View.extend({

    tagName: 'div',

    className: 'todo-list-elem',

    initialize: function(){
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        this.template = _.template('<a href="#"><%= title %><span class="show-list">+</span><span class="hide-list">-</span></a>');
    },

    render: function(){

        var group = this.template(this.model.toJSON());
        $(this.el).html(group);
        return this;

    }

});

var Groups = Backbone.Collection.extend({
    model: Group
});

var GroupsView = Backbone.View.extend({

    initialize: function(){
        _.bindAll(this, 'render');
        this.template = _.template('<div class="groups"></div>');
    },

    render: function(){

        var $groups,
            collection = this.collection;

        $(this.el).html(this.template({}));
        $groups = this.$('.groups');

        collection.each(function(){
            var view = '';
        });

        return this;
    }

});

var devGroup = new Group({title: "Development", id: "1"});
var devGroupView = new GroupView({model: devGroup});