import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LS_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(LS_KEY) ?? 0;

const timeUpdater = function ({seconds}) {
    return localStorage.setItem(LS_KEY, seconds);
};

player.on('timeupdate', throttle(timeUpdater, 1000));
player.setCurrentTime(currentTime);