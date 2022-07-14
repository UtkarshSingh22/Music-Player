import songList from "../SongsList/songsData";
import loadMusicPage from "../musicPage";
import getSongDetails from "./buildCurrentMusicCard";
import addControlsFunctionality from "./playMusic";
import addSongToDatabase from "../Firebase/addToPlaylist_Firestore";

const playPlaylistMusic = () => {
    const playlistParent = document.querySelector(".playlistParent");

    playlistParent.addEventListener("click", (e) => {
        if (e.target.className !== "songBar") {
            return;
        }

        let songName = e.target.children[0].children[1].children[0].textContent;
        let songIndex;

        for (let index = 0; index < songList.length; index++) {
            if (songList[index].name == songName) {
                songIndex = index;
                break;
            }
        }

        loadMusicPage();
        getSongDetails(songIndex);
        addControlsFunctionality(songIndex);
        addSongToDatabase(songIndex);
    });
};

export default playPlaylistMusic;
