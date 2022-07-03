// const getAccess = () => {
//     const prevBtn = document.querySelector(".prevBtn");
//     const nextBtn = document.querySelector(".nextBtn");
//     const musicBar = document.querySelector(".musicBar");
//     const volume = document.querySelector(".volume");
// };
const playSong = () => {
    const src = "/dist/sample-songs/Sub Urban - Cradles [NCS Release].mp3";
    let currentSong = new Audio(src);
};

const playBtnFunctioning = () => {
    const playBtn = document.querySelector(".playBtn");

    playBtn.addEventListener("click", playSong);
};

export default playBtnFunctioning;
