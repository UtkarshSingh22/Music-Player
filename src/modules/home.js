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

const makeMusicCards = (source, name, number) => {
    const songImg = document.createElement("img");
    songImg.classList = `card-img card-${number}-img`;
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = `music-name name-${number}`;
    songName.textContent = name;

    const mainCard = document.createElement("div");
    mainCard.classList = `cards card-${number}`;

    mainCard.appendChild(songImg);
    mainCard.appendChild(songName);

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

    // song's image and name
    const src1 = "",
        src2 = "",
        src3 = "";
    const name1 = "song 1",
        name2 = "song 2",
        name3 = "song 3";

    // home-background image src
    const illusSrc = "";

    const card1 = makeMusicCards(src1, name1, 1);
    const card2 = makeMusicCards(src2, name2, 2);
    const card3 = makeMusicCards(src3, name3, 3);

    const cardsContainer = addCards();
    cardsContainer.appendChild(card1);
    cardsContainer.appendChild(card2);
    cardsContainer.appendChild(card3);

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
