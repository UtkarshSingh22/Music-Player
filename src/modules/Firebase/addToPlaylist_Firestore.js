import { app } from "./firebase-config";
import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { isUserSignedIn } from "./authorization";

const addSongToDatabase = (index) => {
    const playlistIcon = document.querySelector(".playlistIcon");

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

    // const userUid = getAuth().currentUser.uid;

    // const querySnapshot = await getDocs(collection(getFirestore(app), userUid));
    // querySnapshot.forEach((doc) => {
    //     let info = doc.data().name;
    //     if (info == songList[index].name) {
    //         playlistIcon.src = "/icons/noun-remove-playlist-4700647 (1).svg";
    //     } else {
    //         playlistIcon.src = "/icons/noun-add-to-playlist-1565259 (1).svg";
    //     }
    // });
};

export default addSongToDatabase;
