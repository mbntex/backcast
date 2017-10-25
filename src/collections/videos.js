var Videos = Backbone.Collection.extend({

  model: Video,



  initialize: function() {
     this.url = 'https://www.googleapis.com/youtube/v3/search';
  },

  search: function(searchTerm) {
    console.log('SEARCHTERM = ', searchTerm);
    this.fetch({
      data: { 
        'key': window.YOUTUBE_API_KEY,
        'maxResults': 5,
        'part': 'snippet',
        'q': searchTerm,
        'type': 'video',
        'videoEmbeddable': true
      } 
    });
  },


  parse: function(response) {
    console.log(response);
    return response.items;
  }

});


//////

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''})



