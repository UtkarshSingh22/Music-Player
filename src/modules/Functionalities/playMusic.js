import songList from "../SongsList/songsData";
// const getAccess = () => {
//     const prevBtn = document.querySelector(".prevBtn");
//     const nextBtn = document.querySelector(".nextBtn");
//     const musicBar = document.querySelector(".musicBar");
//     const volume = document.querySelector(".volume");
// };

const addControlsFunctionality = (index) => {
    let allAudiosBeingPlayed = document.querySelectorAll("audio");
    for (let i = 0; i < allAudiosBeingPlayed.length; i++) {
        allAudiosBeingPlayed[i].ended;
    }

    let currSongSrc = songList[index].songSrc;

    let currentSong = new Audio(currSongSrc);

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

    musicBar.addEventListener("click", (e) => {
        currentSong.currentTime =
            (e.offsetX / e.srcElement.clientWidth) * currentSong.duration;
    });
};

export default addControlsFunctionality;
