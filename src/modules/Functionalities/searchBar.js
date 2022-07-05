import songList from "../SongsList/songsData";
import loadMusicPage from "../musicPage";
import getSongDetails from "./buildCurrentMusicCard";
import addControlsFunctionality from "./playMusic";

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

                let inputName = document.createElement("div");
                inputName.classList = "inputName";

                let inputArtist = document.createElement("div");
                inputArtist.classList = "inputArtist";

                inputName.textContent = songList[index].name;
                inputArtist.textContent = songList[index].artist;

                matchedStr.appendChild(inputName);
                matchedStr.appendChild(inputArtist);

                searchResults.appendChild(matchedStr);

                main.appendChild(searchResults);
            }
        }

        let allResults = document.querySelectorAll(".matchedStr");

        for (let index = 0; index < allResults.length; index++) {
            allResults[index].addEventListener("click", () => {
                let indexInSongList;
                for (let idx = 0; idx < songList.length; idx++) {
                    if (
                        allResults[index].firstChild.textContent ==
                        songList[idx].name
                    ) {
                        indexInSongList = idx;
                    }
                }
                loadMusicPage();
                getSongDetails(indexInSongList);
                addControlsFunctionality(indexInSongList);
            });
        }

        console.log(allResults);
    });
};

export default getSearchData;
