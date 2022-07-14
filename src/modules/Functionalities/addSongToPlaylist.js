const makeSongBar = (name, artist, cover) => {
    const bar = document.createElement("div");
    bar.classList = "songBar";

    const leftParent = document.createElement("div");
    leftParent.classList = "leftParent";

    const mainInfo = document.createElement("div");
    mainInfo.classList = "mainInfo";

    const songCover = document.createElement("img");
    songCover.classList = "songCover";

    const namePlaylist = document.createElement("div");
    namePlaylist.classList = "namePlaylist";

    const artistPlaylist = document.createElement("div");
    artistPlaylist.classList = "artistPlaylist";

    const remBtn = document.createElement("img");
    remBtn.classList = "remBtn";
    remBtn.src = "/icons/trash-can-regular.svg";

    songCover.src = cover;
    namePlaylist.textContent = name;
    artistPlaylist.textContent = artist;

    mainInfo.appendChild(namePlaylist);
    mainInfo.appendChild(artistPlaylist);

    leftParent.appendChild(songCover);
    leftParent.appendChild(mainInfo);

    bar.appendChild(leftParent);
    bar.appendChild(remBtn);

    return bar;
};

export default makeSongBar;
