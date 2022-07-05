import songList from "../SongsList/songsData";

const getSearchData = () => {
    const searchBar = document.querySelector(".search-bar");

    let searchResults = [];

    searchBar.addEventListener("input", (e) => {
        console.log(e.target.value);
        let inputByUser = searchBar.value;

        // for(let index = 0; index < songList.length; index++){

        // }
    });
};

export default getSearchData;
