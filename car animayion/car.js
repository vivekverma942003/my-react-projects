// var src="sound.mp3"
var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
// audio.setAttribute('autoplay','sound.mp3');
audio.loop=true;
audio.play();
