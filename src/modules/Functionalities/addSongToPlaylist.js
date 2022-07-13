import songList from "../SongsList/songsData";

const makeSongBar = (index) => {
    const bar = document.createElement("div");
    bar.classList = "songBar";

    const songCover = document.createElement("img");
    songCover.classList = "songCover";

    const namePlaylist = document.createElement("div");
    namePlaylist.classList = "namePlaylist";

    const artistPlaylist = document.createElement("div");
    artistPlaylist.classList = "artistPlaylist";

    songCover.src = songList[index].imageSrc;
    namePlaylist.textContent = songList[index].name;
    artistPlaylist.textContent = songList[index].artist;

    bar.appendChild(songCover);
    bar.appendChild(namePlaylist);
    bar.appendChild(artistPlaylist);

    return bar;
};

const addBarToPlaylist = () => {};
