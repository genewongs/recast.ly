import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback = () => { }, YOUTUBE_API_KEY) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query},
    contentType: 'application/json',
    success: function (data) {
      callback(data);
      console.log('YouTube Data Received: ', data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('YouTube Data Retrieval Failed', data);
    }
  });
};

export default searchYouTube;
