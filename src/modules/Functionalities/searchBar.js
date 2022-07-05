import songList from "../SongsList/songsData";

const getSearchData = () => {
    const searchBar = document.querySelector(".search-bar");

    let searchResults = document.createElement("div");
    searchResults.classList = "resultBox";

    const main = document.querySelector(".main");

    searchBar.addEventListener("input", (e) => {
        let inputByUser = e.target.value;
        inputByUser = inputByUser.toLowerCase();

        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        for (let index = 0; index < songList.length; index++) {
            let getName = songList[index].name;
            getName = getName.toLowerCase();

            if (getName.includes(inputByUser)) {
                let matchedStr = document.createElement("div");
                matchedStr.classList = "matchedStr";

                matchedStr.textContent = songList[index].name;
                matchedStr.textContent += songList[index].artist;

                searchResults.appendChild(matchedStr);

                main.appendChild(searchResults);
            }
        }
    });
};

export default getSearchData;
