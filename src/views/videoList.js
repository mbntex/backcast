var VideoListView = Backbone.View.extend({

  initialize: function() {
    console.log('VideoListView Initialized');
  },

  render: function() {
    this.$el.children().detach();
    // console.log('COLLECTION = ', this.collection);
    this.collection.forEach(this.renderMovie, this);
  },

  renderMovie: function(movie) {
    console.log('VIDEOLIST RENDERMOVIE CALLED');
    console.log('MOVIE PASSED IN = ', movie);
    var videoListEntry = new VideoListEntryView({model: movie});
    this.$el.append(videoListEntry.render());
  }




  // //WORKS BUT STATIC HTML
  // render: function() {
  //   this.$el.children().detach();
  //   this.$el.html(this.template());
  //   return this;

  // },

  // template: templateURL('src/templates/videoList.html')

});

