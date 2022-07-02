const makeMusicCards = (source, name, artist, number) => {
    const songImg = document.createElement("img");
    songImg.classList = `card-img card-${number}-img`;
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = `music-name name-${number}`;
    songName.textContent = name;

    const artistName = document.createElement("div");
    songName.classList = `artist-name artistName-${number}`;
    songName.textContent += artist;

    const mainCard = document.createElement("div");
    mainCard.classList = `cards card-${number}`;

    mainCard.appendChild(songImg);
    mainCard.appendChild(songName);
    mainCard.appendChild(artistName);

    return mainCard;
};

export default makeMusicCards;
