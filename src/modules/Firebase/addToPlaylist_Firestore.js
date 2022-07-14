import { app } from "./firebase-config";
import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { isUserSignedIn } from "./authorization";

const addSongToDatabase = async (index) => {
    const playlistIcon = document.querySelector(".playlistIcon");

    const userUid = getAuth().currentUser.uid;

    const docRef = doc(getFirestore(app), userUid, songList[index].name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";
    } else {
        playlistIcon.src = "/icons/noun-add-to-playlist-1565259 (1).svg";
    }

    console.log("done");

    playlistIcon.addEventListener("click", async () => {
        if (isUserSignedIn()) {
            playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";

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
