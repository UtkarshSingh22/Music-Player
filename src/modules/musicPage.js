import songList from "./FunctionsAndData/songsData";
import makeMusicCards from "./FunctionsAndData/makeMusicCards";

const buildSongInfo = (source, name, writer) => {
    const data = document.createElement("div");
    data.classList = "songData";

    const songImg = document.createElement("img");
    songImg.classList = "mainImg";
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = "songName";
    songName.textContent = name;

    const songWriter = document.createElement("div");
    songWriter.classList = "writer";
    songWriter.textContent = writer;

    data.appendChild(songImg);
    data.appendChild(songName);
    data.appendChild(songWriter);

    return data;
};

const getLyrics = () => {
    const lyrics = document.createElement("div");
    lyrics.classList = "lyrics";

    return lyrics;
};

const addCards = () => {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList = "songCards";

    return cardsContainer;
};

const mediaPlayer = (source) => {
    const music = document.createElement("audio");
    music.src = source;
    music.setAttribute("controls", "controls");

    return music;
};

const buildContentImg = (source) => {
    const homeBgImg = document.createElement("img");
    homeBgImg.setAttribute("class", "content-img");
    homeBgImg.src = source;

    return homeBgImg;
};

const loadMusicPage = () => {
    const main = document.querySelector(".main");

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    // home-background image src
    const illusSrc = "";

    const cardsContainer = addCards();

    let index = 3;
    while (index < 6) {
        const src = songList[index].imageSrc;
        const name = songList[index].name;
        const artist = songList[index].artist;

        const card = makeMusicCards(src, name, artist, index + 1);
        cardsContainer.appendChild(card);

        index++;
    }

    // main song data
    let src = "/dist/Sample-songs/Sub Urban - Cradles [NCS Release].mp3",
        name = "",
        writer = "";

    const songInfo = buildSongInfo(src, name, writer);

    const lyrics = getLyrics();

    const musicPlayer = mediaPlayer(src);
    const bgImage = buildContentImg(illusSrc);

    main.appendChild(bgImage);
    main.appendChild(songInfo);
    main.appendChild(lyrics);
    main.appendChild(cardsContainer);
    main.appendChild(musicPlayer);
};

export default loadMusicPage;
