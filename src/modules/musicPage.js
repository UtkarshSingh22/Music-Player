const buildSongInfo = (source, name, writer) => {
    const songImg = document.createElement("img");
    songImg.classList = "mainImg";
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = "songName";
    songName.textContent = name;

    const songWriter = document.createElement("div");
    songWriter.classList = "writer";
    songWriter.textContent = writer;

    return { songName, songWriter, songImg };
};

const songData = () => {
    const data = document.createElement("div");
    data.classList = "songData";

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

const mediaPlayer = (source) => {};
