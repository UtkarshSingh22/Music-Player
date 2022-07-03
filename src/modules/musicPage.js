import songList from "./SongsList/songsData";
import makeMusicCards from "./Functionalities/makeMusicCards";
import buildSongInfo from "./Functionalities/buildCurrentMusicCard.js";
import buildPlayer from "./Functionalities/buildMusicPlayer";
import addFunctionalityToCardsOnMusicPage from "./User Interface/musicPageUI";

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

    const bgImage = buildContentImg(illusSrc);

    // TODO: Add function for getting below data after triggered event listeners and
    // send the data in buildSongInfo func.
    let src = "",
        name = "",
        artist = "";

    const songInfo = buildSongInfo(src, name, artist);

    const lyrics = getLyrics();

    const musicPlayer = buildPlayer();

    main.appendChild(bgImage);
    main.appendChild(songInfo);
    main.appendChild(lyrics);
    main.appendChild(cardsContainer);
    main.appendChild(musicPlayer);

    addFunctionalityToCardsOnMusicPage();
};

export default loadMusicPage;
