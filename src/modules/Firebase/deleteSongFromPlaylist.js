import { getAuth } from "firebase/auth";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";
import loadPlaylist from "../playlistPage";

const deleteSongFromPlaylist = async () => {
    const delBtns = document.querySelectorAll(".remBtn");
    const userUid = getAuth().currentUser.uid;

    delBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let songName =
                e.srcElement.parentElement.children[0].children[1].children[0]
                    .textContent;
            try {
                deleteDoc(doc(getFirestore(app), userUid, songName));
            } catch (error) {
                alert(error);
            }

            loadPlaylist();
        });
    });
};

export default deleteSongFromPlaylist;
