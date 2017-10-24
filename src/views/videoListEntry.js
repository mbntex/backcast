var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    //console.log('VIDEOLISTENTRY RUN');
    this.render();
    //this.model.on('change', function () { this.render(); }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //console.log('MODEL ATTRIBUTES = ', this.model.attributes.snippet);
    console.log('MODEL TITLE = ', this.model.attributes.snippet.title);
    console.log('MODEL DESCRIPTION = ', this.model.attributes.snippet.description);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});


