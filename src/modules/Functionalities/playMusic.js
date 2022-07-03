// const getAccess = () => {
//     const prevBtn = document.querySelector(".prevBtn");
//     const nextBtn = document.querySelector(".nextBtn");
//     const musicBar = document.querySelector(".musicBar");
//     const volume = document.querySelector(".volume");
// };

const addControlsFunctionality = () => {
    const src = "/dist/sample-songs/Sub Urban - Cradles [NCS Release].mp3";
    let currentSong = new Audio(src);

    const playBtn = document.querySelector(".playBtn");
    const playBtnImg = document.querySelector(".playBtnImg");

    playBtn.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            playBtnImg.src = "/dist/icons-and-images/pause-svgrepo-com.svg";
            playBtnImg.classList = "playBtnImg control-img";
        } else {
            currentSong.pause();
            playBtnImg.src = "/dist/icons-and-images/play-svgrepo-com.svg";
            playBtnImg.classList = "pauseBtnImg control-img";
        }
    });

    const musicBar = document.querySelector(".musicBar");

    currentSong.addEventListener("timeupdate", () => {
        //get value in percent
        let songProgress =
            (currentSong.currentTime / currentSong.duration) * 100;

        musicBar.value = songProgress;
    });

    musicBar.addEventListener("change", () => {
        let changedToValue = musicBar.value;
        currentSong.currentTime = (changedToValue * currentSong.duration) / 100;
        musicBar.value = changedToValue;
    });
};

export default addControlsFunctionality;
