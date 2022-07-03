const buildSongInfo = (source, name, artist) => {
    const data = document.createElement("div");
    data.classList = "songData";

    const songImg = document.createElement("img");
    songImg.classList = "mainImg";
    songImg.src = source;

    const songName = document.createElement("div");
    songName.classList = "songName";
    songName.textContent = name;

    const songWriter = document.createElement("div");
    songWriter.classList = "artist";
    songWriter.textContent = artist;

    data.appendChild(songImg);
    data.appendChild(songName);
    data.appendChild(songWriter);

    return data;
};

export default buildSongInfo;
