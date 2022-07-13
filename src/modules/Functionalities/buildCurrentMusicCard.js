import songList from "../SongsList/songsData";

const buildSongInfo = (index) => {
    const data = document.createElement("div");
    data.classList = "songData";

    const songImg = document.createElement("img");
    songImg.classList = "mainImg";
    songImg.setAttribute("src", songList[index].imageSrc);

    const songName = document.createElement("div");
    songName.classList = "songName";
    songName.textContent = songList[index].name;

    const songWriter = document.createElement("div");
    songWriter.classList = "artist";
    songWriter.textContent = songList[index].artist;

    const playlistBtn = document.createElement("button");
    playlistBtn.classList = "playlistBtn";

    //TODO: to change as per added or not.
    playlistBtn.src = "";

    data.appendChild(songImg);
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
