var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },


//   new VideoListView({
//   el: this.$('.list'),
//   collection: this.videos
// }).render();



  template: templateURL('src/templates/app.html')

});
