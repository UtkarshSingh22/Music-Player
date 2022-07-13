import songList from "./SongsList/songsData";
import makeMusicCards from "./Functionalities/makeMusicCards";
import addFunctionalityToHomeElements from "./User Interface/homeUI";
import { addAuth } from "./Firebase/authorization";

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

const addCards = () => {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList = "music-cards";

    return cardsContainer;
};

const addSearchBar = () => {
    const searchBox = document.createElement("div");
    searchBox.classList = "searchBox";

    const bar = document.createElement("input");
    bar.setAttribute("type", "search");
    bar.classList = "search-bar";

    const results = document.createElement("div");
    results.classList = "results";

    const searchIcon = document.createElement("img");
    searchIcon.classList = "searchIcon";
    searchIcon.src = "/icons/color-lineal-magnifying-glass-svgrepo-com.svg";

    searchBox.appendChild(searchIcon);
    searchBox.appendChild(bar);
    searchBox.appendChild(results);

    return searchBox;
};

const loadHome = () => {
    const main = document.querySelector(".main");

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    const cardsContainer = addCards();

    // song's image and name
    let index = 0;
    while (index < 6) {
        const src = songList[index].imageSrc;
        const name = songList[index].name;
        const artist = songList[index].artist;

        const card = makeMusicCards(src, name, artist, index + 1);
        cardsContainer.appendChild(card);

        index++;
    }

    const songsList = getSongsList();

    songsList.appendChild(cardsContainer);

    const homeMsg = buildContent();

    const searchBar = addSearchBar();

    main.appendChild(homeMsg);
    main.appendChild(searchBar);
    main.appendChild(songsList);

    addFunctionalityToHomeElements();
    addAuth();
};

export default loadHome;
