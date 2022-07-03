const makeMusicCards = (source, name, artist) => {
    const songImg = document.createElement("img");
    songImg.classList.add("card-img");
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList.add("music-name");
    songName.textContent = name;

    const artistName = document.createElement("div");
    artistName.classList.add("artist-name");
    artistName.textContent = artist;

    const mainCard = document.createElement("div");
    mainCard.classList.add("cards");

    mainCard.appendChild(songImg);
    mainCard.appendChild(songName);
    mainCard.appendChild(artistName);

    return mainCard;
};

export default makeMusicCards;
