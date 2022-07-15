import loadHome from "./home";
import loadMusicPage from "./musicPage";
import loadPlaylist from "./playlistPage";
import { isUserSignedIn } from "./Firebase/authorization";
import { signIn, signOutUser } from "./Firebase/authorization";

const loadWebpage = () => {
    //Voice button commands

    var alanBtnInstance = alanBtn({
        key: "d62f1035b09dc64b1c55dcab41e5a0aa2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: function (commandData) {
            if (commandData.command === "loadHomePage") {
                loadHome();
            }
            if (commandData.command === "loadMusic") {
                loadMusicPage();
            }
            if (commandData.command === "loadPlaylistPage") {
                loadPlaylist();
            }
            if (commandData.command === "doAuth") {
                signIn();
            }
            if (commandData.command === "Logout") {
                signOutUser();
            }
        },
        rootEl: document.getElementById("alan-btn"),
    });

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
