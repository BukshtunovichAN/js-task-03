import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentTime = JSON.parse(currentTime);
// console.log('parsedCurrentTime:', parsedCurrentTime);

const onPlay = function (data) {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(parsedCurrentTime.seconds);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
