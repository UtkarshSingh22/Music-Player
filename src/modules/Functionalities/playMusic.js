import songList from "../SongsList/songsData";
import getSongDetails from "./buildCurrentMusicCard";

const playPauseSong = (currentSong, playBtnImg, musicGif) => {
    if (currentSong.paused) {
        currentSong.play();
        playBtnImg.src = "/icons/pause-svgrepo-com.svg";
        musicGif.style.opacity = "1";
    } else {
        currentSong.pause();
        playBtnImg.src = "/icons/play-svgrepo-com.svg";
        musicGif.style.opacity = "0";
    }
};

const nextSong = (currentSong, playBtnImg, index) => {
    if (currentSong.paused) {
        playBtnImg.src = "/icons/pause-svgrepo-com.svg";
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
};

const prevSong = (currentSong, playBtnImg, index) => {
    if (currentSong.paused) {
        playBtnImg.src = "/icons/pause-svgrepo-com.svg";
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
};

const addControlsFunctionality = (index) => {
    let currentSong = document.querySelector(".audioElement");
    let playBtn = document.querySelector(".playBtn");
    let playBtnImg = document.querySelector(".playBtnImg");
    const vol = document.querySelector(".volume");
    let currTime = document.querySelector(".currTime");
    const totalTime = document.querySelector(".totalTime");
    const musicGif = document.querySelector(".music-gif");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    currentSong.setAttribute("src", songList[index].songSrc);
    playBtnImg.src = "/icons/pause-svgrepo-com.svg";

    let playPromise = currentSong.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                currentSong.play();
            })
            .catch((error) => {});
    }

    musicGif.setAttribute("src", "/icons/Music.gif");

    playBtn.addEventListener("click", () =>
        playPauseSong(currentSong, playBtnImg, musicGif)
    );

    const musicBar = document.querySelector(".musicBar");

    currentSong.addEventListener("timeupdate", () => {
        //get value in percent
        if (currentSong.currentTime == currentSong.duration) {
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
        }
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
        currTime.textContent =
            befMin + timeInMins + ":" + befSec + timeInSec + "/";

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

    nextBtn.addEventListener("click", () =>
        nextSong(currentSong, playBtnImg, index)
    );

    prevBtn.addEventListener("click", () =>
        prevSong(currentSong, playBtnImg, index)
    );

    vol.addEventListener("click", (e) => {
        currentSong.volume = e.offsetX / e.srcElement.clientWidth;
    });
};

export default addControlsFunctionality;
