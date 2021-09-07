import elements from "./playerElements.js";
import { secondsToMinutes , moveSeekbar} from "./utils.js";

export default {
    file: "audio/audio.mp3",
    isPlaying: false,
    start() {
        elements.get.call(this);
        elements.createAudioElement.call(this, this.file);
        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        };
        this.audio.volume = 1;
    },
    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },
    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    restart() {
        this.audio.currentTime = 0;
        this.pause();
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    setSeek(value) {
        this.audio.currentTime = value;
    },
    timeUpdate() {
        this.seekbar.style.backgroundImage = moveSeekbar(this.audio.currentTime, this.audio.duration);
        this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
        this.seekbar.value = this.audio.currentTime;
    }
};
