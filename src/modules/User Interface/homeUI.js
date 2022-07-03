import loadMusicPage from "../musicPage";

const getClicked = (e) => {
    console.log(e.target.className);
    if (e.target.className == "card-img") {
        loadMusicPage();
    } else {
        return;
    }
};

const addFunctionalityToMusicCards = () => {
    const cardsParent = document.querySelector(".music-cards");

    cardsParent.addEventListener("click", getClicked);
};

export default addFunctionalityToMusicCards;
