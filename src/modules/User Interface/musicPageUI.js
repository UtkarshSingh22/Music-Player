import songList from "../SongsList/songsData";
import addControlsFunctionality from "../Functionalities/playMusic";

const addFunctionalityToCardsOnMusicPage = () => {
    const cardsParent = document.querySelector(".songCards");

    cardsParent.addEventListener("click", (e) => {
        if (e.target.parentElement.className == "cards") {
            const songName = e.target.parentElement.children[1].textContent;

            let songIndex;
            for (let i = 0; i < songList.length; i++) {
                if (songList[i].name == songName) {
                    songIndex = i;
                }
            }

            addControlsFunctionality(songIndex);

            //TODO: Play music according to index
        } else {
            return;
        }
    });
};

export default addFunctionalityToCardsOnMusicPage;
