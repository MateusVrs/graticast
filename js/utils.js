function secondsToMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
};

function moveSeekbar(current_time, total_time) {
    var colorTime = (current_time / total_time * 100) + 0.3;
    var bgSeekbar = "linear-gradient(to right, rgb(16, 129, 63) " + colorTime + "%, whitesmoke " + colorTime + "% 100%)";
    return bgSeekbar;
};

export {secondsToMinutes, moveSeekbar};
