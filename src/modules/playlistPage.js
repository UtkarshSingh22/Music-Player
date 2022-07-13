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

const loadPlaylist = () => {
    const main = document.querySelector(".main");

    const box = document.createElement("div");
    box.classList = "playlistBox";

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    const head = addHead();
    const content = addContentsParent();

    box.appendChild(head);
    box.appendChild(content);

    main.appendChild(box);
};

export default loadPlaylist;
