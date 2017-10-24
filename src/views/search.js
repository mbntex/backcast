var SearchView = Backbone.View.extend({

  initialize: function() {
    console.log('SearchView Initialized');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
