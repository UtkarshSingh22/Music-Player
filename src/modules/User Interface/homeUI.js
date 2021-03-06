import loadMusicPage from "../musicPage";
import songList from "../SongsList/songsData";
import addControlsFunctionality from "../Functionalities/playMusic";
import getSongDetails from "../Functionalities/buildCurrentMusicCard";
import getSearchData from "../Functionalities/searchBar";
import addSongToDatabase from "../Firebase/addToPlaylist_Firestore";

const getClicked = (e) => {
    if (e.target.parentElement.className == "cards") {
        const songName =
            e.target.parentElement.children[1].children[0].textContent;

        let songIndex;
        for (let i = 0; i < songList.length; i++) {
            if (songList[i].name == songName) {
                songIndex = i;
            }
        }
        loadMusicPage();
        getSongDetails(songIndex);
        addControlsFunctionality(songIndex);
        addSongToDatabase(songIndex);
    } else {
        return;
    }
};

const addFunctionalityToHomeElements = () => {
    const cardsParent = document.querySelector(".music-cards");

    cardsParent.addEventListener("click", getClicked);

    getSearchData();
};

export default addFunctionalityToHomeElements;
