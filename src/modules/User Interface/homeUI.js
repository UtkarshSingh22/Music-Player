import loadMusicPage from "../musicPage";
import songList from "../SongsList/songsData";
import addControlsFunctionality from "../Functionalities/playMusic";
import buildSongInfo from "../Functionalities/buildCurrentMusicCard";

const getClicked = (e) => {
    if (e.target.parentElement.className == "cards") {
        const songName = e.target.parentElement.children[1].textContent;

        let songIndex;
        for (let i = 0; i < songList.length; i++) {
            if (songList[i].name == songName) {
                songIndex = i;
            }
        }

        loadMusicPage();
        buildSongInfo(songIndex);
        addControlsFunctionality(songIndex);
    } else {
        return;
    }
};

const addFunctionalityToMusicCards = () => {
    const cardsParent = document.querySelector(".music-cards");

    cardsParent.addEventListener("click", getClicked);
};

export default addFunctionalityToMusicCards;
