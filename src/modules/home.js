import songList from "./FunctionsAndData/songsData";
import makeMusicCards from "./FunctionsAndData/makeMusicCards";

const buildContentImg = (source) => {
    const homeBgImg = document.createElement("img");
    homeBgImg.setAttribute("class", "content-img");
    homeBgImg.src = source;

    return homeBgImg;
};

const buildContent = () => {
    const data = document.createElement("div");
    data.setAttribute("class", "content-data");
    data.textContent = "Get ready to enjoy the experience!";

    return data;
};

const getSongsList = () => {
    const list = document.createElement("div");
    list.classList = "list-of-songs";

    return list;
};

const addHead = () => {
    const head = document.createElement("div");
    head.classList = "list-head";
    head.textContent = "Play music";

    return head;
};

const addCards = () => {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList = "music-cards";

    return cardsContainer;
};

const addSearchBar = () => {
    const bar = document.createElement("input");
    bar.setAttribute("type", "search");
    bar.classList = "search-bar";

    return bar;
};

const loadHome = () => {
    const main = document.querySelector(".main");

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    // home-background image src
    const illusSrc = "";

    const cardsContainer = addCards();

    // song's image and name
    let index = 0;
    while (index < 3) {
        const src = songList[index].imageSrc;
        const name = songList[index].name;
        const artist = songList[index].artist;

        const card = makeMusicCards(src, name, artist, index + 1);
        cardsContainer.appendChild(card);

        index++;
    }

    const listHead = addHead();

    const songsList = getSongsList();
    songsList.appendChild(listHead);
    songsList.appendChild(cardsContainer);

    const bgImage = buildContentImg(illusSrc);
    const homeMsg = buildContent();

    const searchBar = addSearchBar();

    main.appendChild(bgImage);
    main.appendChild(homeMsg);
    main.appendChild(searchBar);
    main.appendChild(songsList);
};

export default loadHome;
