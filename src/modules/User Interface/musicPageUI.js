import songList from "../SongsList/songsData";
import addControlsFunctionality from "../Functionalities/playMusic";
import getSongDetails from "../Functionalities/buildCurrentMusicCard";
import loadMusicPage from "../musicPage";
import addSongToDatabase from "../Firebase/addToPlaylist_Firestore";

const addFunctionalityToCardsOnMusicPage = () => {
    const cardsParent = document.querySelector(".songCards");

    cardsParent.addEventListener("click", (e) => {
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
    });
};

export default addFunctionalityToCardsOnMusicPage;
