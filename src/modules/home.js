import songList from "./songsData";

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

const makeMusicCards = (source, name, artist, number) => {
    const songImg = document.createElement("img");
    songImg.classList = `card-img card-${number}-img`;
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = `music-name name-${number}`;
    songName.textContent = name;

    const artistName = document.createElement("div");
    songName.classList = `artist-name artistName-${number}`;
    songName.textContent = artist;

    const mainCard = document.createElement("div");
    mainCard.classList = `cards card-${number}`;

    mainCard.appendChild(songImg);
    mainCard.appendChild(songName);
    mainCard.appendChild(artistName);

    return mainCard;
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

    console.log(songList[0].songSrc);
    // song's image and name
    let index = 0;
    while (index < 3) {
        const src = songList[index].imageSrc;
        const name = songList[index].name;

        const card = makeMusicCards(src, name, index + 1);
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
