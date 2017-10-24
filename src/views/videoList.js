var VideoListView = Backbone.View.extend({

  initialize: function() {
    console.log('VideoListView Initialized');
    //this.render();
  },

  render: function() {
      console.log('TEST1');
      this.$el.children().detach();
      //this.$el.empty();
      // console.log('COLLECTION = ', this.collection);
      // console('THIS = ', this);
      //debugger;
      //console.log(this.collection);
      this.collection.forEach(this.renderMovie, this);
      // for (var i = 0; i < this.collection.length; i++) {
      //   console.log(this.collection[i];)
      // };
      //this.collection.forEach()
      //return this;
  },

  renderMovie: function(movie) {
    console.log('TEST2');
    //console.log(movie);
    // var videoListEntry = new VideoListEntryView({model: movie});
    // console.log('videoListEntry = ', videoListEntry);
    // this.$el.append(videoListEntry.render());
  }




  // //WORKS BUT STATIC HTML
  // render: function() {
  //   this.$el.children().detach();
  //   this.$el.html(this.template());
  //   return this;

  // },

  // template: templateURL('src/templates/videoList.html')

});




/////////

// render: function() {
//     this.$el.empty();
//     this.collection.forEach(this.renderMovie, this);
//   },

//   renderMovie: function(movie) {
//     var VideoListEntry = new VideoListEntryView({model: movie});
//     this.$el.append(VideoListEntry.render());
//   }


