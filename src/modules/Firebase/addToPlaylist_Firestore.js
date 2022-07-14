import { app } from "./firebase-config";
import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { isUserSignedIn } from "./authorization";

const addSongToDatabase = (index) => {
    const playlistBtn = document.querySelector(".playlistBtn");
    const playlistIcon = document.querySelector(".playlistIcon");

    playlistBtn.addEventListener("click", async () => {
        if (isUserSignedIn()) {
            playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";
            playlistBtn.classList = "playlistRem";

            const userUid = getAuth().currentUser.uid;
            let songName = songList[index].name;
            let songArtist = songList[index].artist;
            let songSrc = songList[index].songSrc;
            let songCover = songList[index].imageSrc;

            await setDoc(doc(getFirestore(app), userUid, songName), {
                name: songName,
                artist: songArtist,
                songSource: songSrc,
                songCoverSource: songCover,
            });
        } else {
            alert("You need to login first to open the playlist");
        }
    });
};

export default addSongToDatabase;
