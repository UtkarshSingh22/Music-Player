import songList from "../SongsList/songsData";

const addControlsFunctionality = (index) => {
    let currentSong = document.querySelector(".audioElement");
    let playBtn = document.querySelector(".playBtn");
    let playBtnImg = document.querySelector(".playBtnImg");

    let loadMusic = currentSong.setAttribute("src", songList[index].songSrc);

    currentSong.setAttribute("src", songList[index].songSrc);
    currentSong.play();

    playBtn.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            playBtnImg.src = "/dist/icons-and-images/pause-svgrepo-com.svg";
        } else {
            currentSong.pause();
            playBtnImg.src = "/dist/icons-and-images/play-svgrepo-com.svg";
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

    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    nextBtn.addEventListener("click", () => {
        if (index == songList.length - 1) {
            index = 0;
        } else {
            index++;
        }

        currentSong.setAttribute("src", songList[index].songSrc);
        currentSong.play();
    });

    prevBtn.addEventListener("click", () => {
        if (index == 0) {
            index = songList.length - 1;
        } else {
            index--;
        }

        currentSong.setAttribute("src", songList[index].songSrc);
        currentSong.play();
    });
};

export default addControlsFunctionality;

// const getAccess = () => {
//     const prevBtn = document.querySelector(".prevBtn");
//     const nextBtn = document.querySelector(".nextBtn");
//     const musicBar = document.querySelector(".musicBar");
//     const volume = document.querySelector(".volume");
// };
