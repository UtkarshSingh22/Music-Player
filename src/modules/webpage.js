import loadHome from "./home";
import loadMusicPage from "./musicPage";
import loadPlaylist from "./playlistPage";

const loadWebpage = () => {
    // loadHome();
    loadPlaylist();

    const homeBtn = document.querySelector(".home-btn");
    const mediaPlayer = document.querySelector(".music-list-btn");
    const playlistBtn = document.querySelector("playlist-btn");

    homeBtn.addEventListener("click", loadHome);
    mediaPlayer.addEventListener("click", loadMusicPage);
    // playlistBtn.addEventListener("click", loadPlaylist);
};

export default loadWebpage;
