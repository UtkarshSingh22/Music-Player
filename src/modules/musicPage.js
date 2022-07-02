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

const makeMusicCards = (source, name, number) => {
    const songImg = document.createElement("img");
    songImg.classList = `cardImg card-${number}`;
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = `musicName songName-${number}`;
    songName.textContent = name;

    const mainCard = document.createElement("div");
    mainCard.classList = `cardsList cardNum-${number}`;

    mainCard.appendChild(songImg);
    mainCard.appendChild(songName);

    return mainCard;
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

    // main song data
    let src = "/dist/Sample-songs/song1.mp3",
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
