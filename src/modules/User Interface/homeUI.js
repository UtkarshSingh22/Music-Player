import loadMusicPage from "../musicPage";

const getClicked = (e) => {
    console.log(e.target.className);
    if (e.target.className == "card-img card-1-img") {
        loadMusicPage();
    } else {
        return;
    }
};

const makeMusicCardsToBeClicked = () => {
    const cardsParent = document.querySelector(".music-cards");

    cardsParent.addEventListener("click", getClicked);
};

export default makeMusicCardsToBeClicked;
