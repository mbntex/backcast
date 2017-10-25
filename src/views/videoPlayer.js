var VideoPlayerView = Backbone.View.extend({

initialize: function() {
    //console.log('VideoPlayerView Initialized');
    this.collection.on('select', function (clickedVideo) { 
      this.model = clickedVideo;
      this.render();
    }, this);

    this.collection.on('sync', function () {
      this.model = this.collection.at(0);
      this.render();
    }, this);
    // this.collection.on('change', function() { this.render() }, this );
  },


  render: function() {
    //MORE ON THIS LATER console.log('VIDEOPLAYER!!! = ', this.model);
    //console.log('THIS MODEL = ', this.model.attributes);
    if (this.model === undefined) {
      this.$el.html('<div>THERE ARE NO RESULTS FOR THIS RIDICULOUS SEARCH TERM</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));  
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
