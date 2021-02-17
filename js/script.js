//// Disable RIGHT CLICK on video tag
window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", function(e) {
  //document.onkeydown = function(e) {
  // "I" key / "J" key / "S" key + macOS / "U" key
    if ((e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.shiftKey && e.keyCode == 74) || (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) || (e.ctrlKey && e.keyCode == 85) || (event.keyCode == 123)) {
      disabledEvent(e);
    }
  }, false);
  function disabledEvent(e){
    if (e.stopPropagation){
      e.stopPropagation();
    } else if (window.event){
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};

// //// YT API
// // Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('ytplayer', {
//     videoId: 'RK1K2bCg4J8',
//     host: 'https://www.youtube-nocookie.com',
//     playerVars: {
//       modestbranding: 1,
//       ref: 0,
//       color: 'white',
//     }
//   });
// }
