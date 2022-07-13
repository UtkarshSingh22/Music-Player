import { app } from "./firebase-config";
import songList from "../SongsList/songsData";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
import { isUserSignedIn } from "./authorization";

const addSongToDatabase = (index) => {
    const playlistBtn = document.querySelector(".playlistBtn");

    playlistBtn.addEventListener("click", () => {
        if (isUserSignedIn()) {
            const userUid = getAuth().currentUser.uid;

            
            await setDoc(doc(getFirestore(app), 'users', userUid), song)
        } else {
            alert("You have to login first.");
        }
    });
};

export default addSongToDatabase;
