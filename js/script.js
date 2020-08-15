//// YT API
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    videoId: 'RK1K2bCg4J8',
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      modestbranding: 1,
      ref: 0,
      color: 'white',
    }
  });
}
