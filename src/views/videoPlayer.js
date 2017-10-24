var VideoPlayerView = Backbone.View.extend({

initialize: function() {
    console.log('VideoPlayerView Initialized');
    this.render();
  },


  render: function() {
    console.log('VIDEOPLAYER!!! = ', this);
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
