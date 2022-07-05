import songList from "../SongsList/songsData";
import getSongDetails from "./buildCurrentMusicCard";

const addControlsFunctionality = (index) => {
    let currentSong = document.querySelector(".audioElement");
    let playBtn = document.querySelector(".playBtn");
    let playBtnImg = document.querySelector(".playBtnImg");
    const vol = document.querySelector(".volume");
    let currTime = document.querySelector(".currTime");
    const totalTime = document.querySelector(".totalTime");

    currentSong.setAttribute("src", songList[index].songSrc);

    let playPromise = currentSong.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                currentSong.play();
            })
            .catch((error) => {});
    }

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

        let timeInMins = Math.floor(currentSong.currentTime / 60);
        let timeInSec = Math.floor(currentSong.currentTime % 60);

        let befMin = "",
            befSec = "";
        if (timeInMins / 10 == 0) {
            befMin = "0";
        }
        if (Math.floor(timeInSec / 10) == 0) {
            befSec = "0";
        }
        currTime.textContent = befMin + timeInMins + ":" + befSec + timeInSec;

        let inMins = Math.floor(currentSong.duration / 60);
        let inSec = Math.floor(currentSong.duration % 60);

        let befMins = "",
            befSecs = "";
        if (inMins / 10 == 0) {
            befMins = "0";
        }
        if (Math.floor(inSec / 10) == 0) {
            befSecs = "0";
        }
        if (Number.isNaN(inMins) == false)
            totalTime.textContent = befMins + inMins + ":" + befSecs + inSec;
        else totalTime.textContent = "00:00";
    });

    musicBar.addEventListener("click", (e) => {
        currentSong.currentTime =
            (e.offsetX / e.srcElement.clientWidth) * currentSong.duration;
    });

    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    nextBtn.addEventListener("click", () => {
        if (currentSong.paused) {
            playBtnImg.src = "/dist/icons-and-images/pause-svgrepo-com.svg";
        }
        if (index == songList.length - 1) {
            index = 0;
        } else {
            index++;
        }
        getSongDetails(index);
        currentSong.setAttribute("src", songList[index].songSrc);

        let playPromise = currentSong.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    currentSong.play();
                })
                .catch((error) => {});
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentSong.paused) {
            playBtnImg.src = "/dist/icons-and-images/pause-svgrepo-com.svg";
        }
        if (index == 0) {
            index = songList.length - 1;
        } else {
            index--;
        }
        getSongDetails(index);
        currentSong.setAttribute("src", songList[index].songSrc);

        let playPromise = currentSong.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    currentSong.play();
                })
                .catch((error) => {});
        }
    });

    vol.addEventListener("click", (e) => {
        currentSong.volume = e.offsetX / e.srcElement.clientWidth;
    });
};

export default addControlsFunctionality;
