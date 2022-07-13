const makeSongBar = (name, artist, cover) => {
    const bar = document.createElement("div");
    bar.classList = "songBar";

    const songCover = document.createElement("img");
    songCover.classList = "songCover";

    const namePlaylist = document.createElement("div");
    namePlaylist.classList = "namePlaylist";

    const artistPlaylist = document.createElement("div");
    artistPlaylist.classList = "artistPlaylist";

    songCover.src = cover;
    namePlaylist.textContent = name;
    artistPlaylist.textContent = artist;

    bar.appendChild(songCover);
    bar.appendChild(namePlaylist);
    bar.appendChild(artistPlaylist);

    return bar;
};

export default makeSongBar;
