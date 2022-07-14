import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./firebase-config";
import { isUserSignedIn } from "./authorization";
import delSong from "./deleteSongByPlaylistButton";

const addToPlaylist = async (index) => {
    const playlistIcon = document.querySelector(".playlistIcon");

    playlistIcon.addEventListener("click", async () => {
        if (isUserSignedIn()) {
            playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";
            playlistIcon.classList = "remPlaylist";

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

            delSong(index);
        } else {
            alert("You need to login first to open the playlist");
        }
    });
};

export default addToPlaylist;
