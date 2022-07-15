import loadHome from "./home";
import loadMusicPage from "./musicPage";
import loadPlaylist from "./playlistPage";
import { isUserSignedIn } from "./Firebase/authorization";
import { signIn, signOutUser } from "./Firebase/authorization";
import getSongDetails from "./Functionalities/buildCurrentMusicCard";
import addControlsFunctionality from "../modules/Functionalities/playMusic";
import addSongToDatabase from "./Firebase/addToPlaylist_Firestore";

const loadWebpage = () => {
    //Voice button commands

    var alanBtnInstance = alanBtn({
        key: "d62f1035b09dc64b1c55dcab41e5a0aa2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: function (commandData) {
            if (commandData.command === "loadHomePage") {
                loadHome();
            } else if (commandData.command === "loadMusic") {
                loadMusicPage();
            } else if (commandData.command === "loadPlaylistPage") {
                if (!isUserSignedIn()) {
                    alert("You need to login first to open the playlist");
                } else {
                    loadPlaylist();
                }
            } else if (commandData.command === "doAuth") {
                if (!isUserSignedIn()) {
                    signIn();
                } else {
                    alert("You need to sign out first.");
                }
            } else if (commandData.command === "Logout") {
                if (isUserSignedIn()) {
                    signOutUser();
                } else {
                    alert("You need to sign in first.");
                }
            } else if (commandData.command === "playFirst") {
                let songIndex = 0;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
            } else if (commandData.command === "playSecond") {
                let songIndex = 1;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
            } else if (commandData.command === "playThird") {
                let songIndex = 2;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
            } else if (commandData.command === "playFourth") {
                let songIndex = 3;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
            } else if (commandData.command === "playFifth") {
                let songIndex = 4;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
            } else if (commandData.command === "playSixth") {
                let songIndex = 5;
                loadMusicPage();
                getSongDetails(songIndex);
                addControlsFunctionality(songIndex);
                addSongToDatabase(songIndex);
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
