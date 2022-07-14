import loadHome from "./home";
import loadMusicPage from "./musicPage";
import loadPlaylist from "./playlistPage";
import { isUserSignedIn } from "./Firebase/authorization";

const loadWebpage = () => {
    loadHome();

    const homeBtn = document.querySelector(".home-btn");
    const mediaPlayer = document.querySelector(".music-list-btn");
    const playlistBtn = document.querySelector(".playlist-btn");

    homeBtn.addEventListener("click", loadHome);
    mediaPlayer.addEventListener("click", loadMusicPage);
    playlistBtn.addEventListener("click", () => {
        if (!isUserSignedIn()) {
            alert("You need to login first to open the playlist");
            return;
        }
        loadPlaylist();
    });
};

export default loadWebpage;
