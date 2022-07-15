import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";
import { isUserSignedIn } from "./authorization";
import addToPlaylist from "./addToPlaylistByButton";

const delSong = async (index) => {
    const remPlaylist = document.querySelector(".remPlaylist");

    remPlaylist.addEventListener("click", async () => {
        if (isUserSignedIn()) {
            remPlaylist.src = "/icons/noun-add-to-playlist-1565259 (1).svg";
            remPlaylist.classList = "playlistIcon";

            const userUid = getAuth().currentUser.uid;

            let songName = songList[index].name;

            try {
                deleteDoc(doc(getFirestore(app), userUid, songName));
            } catch (error) {
                alert(error);
            }

            addToPlaylist(index);
        } else {
            alert("You need to login first to open the playlist");
        }
    });
};

export default delSong;
