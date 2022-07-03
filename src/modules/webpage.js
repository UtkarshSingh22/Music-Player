import loadHome from "./home";
import loadMusicPage from "./musicPage";
import makeMusicCardsToBeClicked from "./User Interface/homeUI";

const loadWebpage = () => {
    loadHome();
    makeMusicCardsToBeClicked();

    const homeBtn = document.querySelector(".home-btn");
    const mediaPlayer = document.querySelector(".music-list-btn");
    //const playlistBtn = document.querySelector("playlist-btn");

    homeBtn.addEventListener("click", loadHome);
    mediaPlayer.addEventListener("click", loadMusicPage);
};

export default loadWebpage;
