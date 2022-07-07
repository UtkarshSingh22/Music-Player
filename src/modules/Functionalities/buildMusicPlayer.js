const addAudioElement = () => {
    let audio = document.createElement("audio");
    audio.classList = "audioElement";
    audio.src = "";

    return audio;
};

const addMusicRangeBar = () => {
    const range = document.createElement("input");
    range.setAttribute("type", "range");
    range.classList = "musicBar";
    range.value = 0;

    return range;
};

const addSongInfo = () => {
    const info = document.createElement("div");
    info.classList = "songDetail";

    const gif = document.createElement("img");
    const duration = document.createElement("div");

    let currTime = document.createElement("div");
    let totalTime = document.createElement("div");

    currTime.classList = "currTime";
    totalTime.classList = "totalTime";

    gif.classList = "music-gif";
    duration.classList = "duration";

    duration.appendChild(currTime);
    duration.appendChild(totalTime);

    //TODO : Add gif source
    gif.src = "";

    info.appendChild(gif);
    info.appendChild(duration);

    return info;
};

const addControls = () => {
    const controls = document.createElement("div");

    const prevBtn = document.createElement("div");
    const nextBtn = document.createElement("div");
    const playBtn = document.createElement("div");

    const volume = document.createElement("input");
    volume.value = 100;

    const prevBtnImg = document.createElement("img");
    const nextBtnImg = document.createElement("img");
    const playBtnImg = document.createElement("img");

    prevBtnImg.src = "";
    nextBtnImg.src = "";
    playBtnImg.src = "";

    playBtnImg.classList.add("playBtnImg", "control-img");
    nextBtnImg.classList.add("nextBtnImg", "control-img");
    prevBtnImg.classList.add("prevBtnImg", "control-img");

    prevBtn.classList.add("prevBtn", "controlBtn");
    playBtn.classList.add("playBtn", "controlBtn");
    nextBtn.classList.add("nextBtn", "controlBtn");

    prevBtn.appendChild(prevBtnImg);
    playBtn.appendChild(playBtnImg);
    nextBtn.appendChild(nextBtnImg);

    volume.setAttribute("type", "range");
    volume.classList = "volume";

    controls.classList = "controls";

    controls.appendChild(prevBtn);
    controls.appendChild(playBtn);
    controls.appendChild(nextBtn);
    controls.appendChild(volume);

    return controls;
};

const buildPlayer = () => {
    const mediaPlayer = document.createElement("div");
    mediaPlayer.classList = "mediaPlayer";

    mediaPlayer.appendChild(addAudioElement());
    mediaPlayer.appendChild(addSongInfo());
    mediaPlayer.appendChild(addMusicRangeBar());
    mediaPlayer.appendChild(addControls());

    return mediaPlayer;
};

export default buildPlayer;
