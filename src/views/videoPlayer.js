var VideoPlayerView = Backbone.View.extend({

initialize: function() {
    //console.log('VideoPlayerView Initialized');
    this.render();
    this.collection.on('select', function (clickedVideo) { 
      this.model = clickedVideo;
      this.render();
    }, this);
    // this.collection.on('change', function() { this.render() }, this );
  },


  render: function() {
    //MORE ON THIS LATER console.log('VIDEOPLAYER!!! = ', this.model);
    //console.log('THIS MODEL = ', this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
