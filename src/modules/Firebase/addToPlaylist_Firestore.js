import { app } from "./firebase-config";
import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import addToPlaylist from "./addToPlaylistByButton";
import delSong from "./deleteSongByPlaylistButton";
import { isUserSignedIn } from "./authorization";

const addSongToDatabase = async (index) => {
    const playlistIcon = document.querySelector(".playlistIcon");

    if (isUserSignedIn()) {
        let userUid = getAuth().currentUser.uid;

        const docRef = doc(getFirestore(app), userUid, songList[index].name);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";
            playlistIcon.classList = "remPlaylist";
            delSong(index);
        } else {
            playlistIcon.src = "/icons/noun-add-to-playlist-1565259 (1).svg";
            playlistIcon.classList = "playlistIcon";
            addToPlaylist(index);
        }
    } else {
        playlistIcon.addEventListener("click", () => {
            if (!isUserSignedIn()) {
                alert("You need to sign in to access your playlist.");
            }
        });
    }
};

export default addSongToDatabase;
