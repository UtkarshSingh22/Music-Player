import songList from "../SongsList/songsData";

const buildSongInfo = (index) => {
    const data = document.createElement("div");
    data.classList = "songData";

    const imageBox = document.createElement("div");
    imageBox.classList = "imageBox";

    const songImg = document.createElement("img");
    songImg.classList = "mainImg";
    songImg.setAttribute("src", songList[index].imageSrc);

    const songName = document.createElement("div");
    songName.classList = "songName";
    songName.textContent = songList[index].name;

    const songWriter = document.createElement("div");
    songWriter.classList = "artist";
    songWriter.textContent = songList[index].artist;

    const playlistBtn = document.createElement("div");
    playlistBtn.classList = "playlistBtn";
    const playlistIcon = document.createElement("img");
    playlistIcon.classList = "playlistIcon";

    //TODO: to change as per added or not.
    playlistIcon.src = "/icons/noun-add-to-playlist-1565259 (1).svg";
    playlistBtn.appendChild(playlistIcon);

    imageBox.appendChild(songImg);
    imageBox.appendChild(playlistBtn);

    data.appendChild(imageBox);
    data.appendChild(songName);
    data.appendChild(songWriter);

    return data;
};

const getSongDetails = (index) => {
    const main = document.querySelector(".main");

    if (main.lastChild.className == "songData") {
        main.removeChild(main.lastChild);
    }
    main.appendChild(buildSongInfo(index));
};

export default getSongDetails;
