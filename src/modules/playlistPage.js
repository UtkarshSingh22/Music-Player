import makeSongBar from "./Functionalities/addSongToPlaylist";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./Firebase/firebase-config";
import { getAuth } from "firebase/auth";

const addHead = () => {
    const head = document.createElement("div");
    head.classList = "playlistHead";
    head.textContent = "Playlist";

    return head;
};

const addContentsParent = () => {
    const songsParent = document.createElement("div");
    songsParent.classList = "playlistParent";

    return songsParent;
};

const loadPlaylist = async () => {
    const main = document.querySelector(".main");

    const box = document.createElement("div");
    box.classList = "playlistBox";

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    const head = addHead();
    const content = addContentsParent();

    const userUid = getAuth().currentUser.uid;

    const querySnapshot = await getDocs(collection(getFirestore(app), userUid));
    querySnapshot.forEach((doc) => {
        let info = doc.data();
        let bar = makeSongBar(info.name, info.artist, info.songCoverSource);
        content.appendChild(bar);
    });

    box.appendChild(head);
    box.appendChild(content);

    main.appendChild(box);
};

export default loadPlaylist;
