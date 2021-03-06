import songList from "./SongsList/songsData";
import makeMusicCards from "./Functionalities/makeMusicCards";
import buildPlayer from "./Functionalities/buildMusicPlayer";
import addFunctionalityToCardsOnMusicPage from "./User Interface/musicPageUI";

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
    const illusSrc = "/Illustrations/rockstar.svg";

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

    const musicPlayer = buildPlayer();

    main.appendChild(bgImage);
    main.appendChild(cardsContainer);
    main.appendChild(musicPlayer);

    addFunctionalityToCardsOnMusicPage();
};

export default loadMusicPage;
