import { getAuth } from "firebase/auth";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import { app } from "./firebase-config";

const delSong = async (songName) => {
    const userUid = getAuth().currentUser.uid;

    const querySnapshot = await getDocs(collection(getFirestore(app), userUid));
    querySnapshot.forEach((docs) => {
        if (docs.data().name == songName) {
            await deleteDoc(doc(getFirestore(app), userUid, songName));
            console.log('deleted')
        }
    });
}

const deleteSongFromPlaylist = () => {
    const delBtns = document.querySelectorAll(".remBtn");

    let songName;

    delBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            songName =
                e.srcElement.parentElement.children[0].children[1].children[0]
                    .textContent;
        });
    });

    delSong(songName);
};

export default deleteSongFromPlaylist;
