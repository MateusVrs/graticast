import { secondsToMinutes } from "./utils.js";

export default {
    get () {
        this.playPause = document.querySelector("#play-pause");
        this.seekbar  = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
    },
    createAudioElement (audio) {
        this.audio = new Audio(audio);
    },
    actions () {
        this.audio.onended = () => this.restart();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
    }
}
