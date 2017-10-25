var SearchView = Backbone.View.extend({

  initialize: function() {
    // console.log('SearchView Initialized');
  },

  events: {
    // 'click #searchButton': 'handleClick',
    'click button': 'handleClick',
    'keyup': 'handleClick'
  },

  handleClick: function(e) {
    if ((e.type == "keyup" && e.keyCode == 13) || e.type == "click") {
      // console.log($("#searchInput").val())
      // console.log('CLICK THIS + ', this);
      // console.log('COLLECTION = ', this.collection);
      var searchTerm = $("#searchInput").val();
      this.collection.search(searchTerm);
    };
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
