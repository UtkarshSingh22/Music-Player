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

    return range;
};

const addSongInfo = () => {
    const info = document.createElement("div");
    info.classList = "songDetail";

    const name = document.createElement("div");
    const artist = document.createElement("div");
    const gif = document.createElement("img");
    const duration = document.createElement("div");

    name.classList = "song-name";
    artist.classList = "artist-name";
    gif.classList = "music-gif";
    duration.classList = "duration";

    //TODO : Add gif source
    gif.src = "";

    info.appendChild(name);
    info.appendChild(artist);
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

    const prevBtnImg = document.createElement("img");
    const nextBtnImg = document.createElement("img");
    const playBtnImg = document.createElement("img");

    prevBtnImg.src = "/dist/icons-and-images/previous-svgrepo-com.svg";
    nextBtnImg.src = "/dist/icons-and-images/next-svgrepo-com.svg";
    playBtnImg.src = "/dist/icons-and-images/play-svgrepo-com.svg";

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
