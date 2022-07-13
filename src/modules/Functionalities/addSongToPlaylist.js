const makeSongBar = (name, artist, cover) => {
    const bar = document.createElement("div");
    bar.classList = "songBar";

    const mainInfo = document.createElement("div");
    mainInfo.classList = "mainInfo";

    const songCover = document.createElement("img");
    songCover.classList = "songCover";

    const namePlaylist = document.createElement("div");
    namePlaylist.classList = "namePlaylist";

    const artistPlaylist = document.createElement("div");
    artistPlaylist.classList = "artistPlaylist";

    songCover.src = cover;
    namePlaylist.textContent = name;
    artistPlaylist.textContent = artist;

    mainInfo.appendChild(namePlaylist);
    mainInfo.appendChild(artistPlaylist);

    bar.appendChild(songCover);
    bar.appendChild(mainInfo);

    return bar;
};

export default makeSongBar;
