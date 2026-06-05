const cards = document.querySelectorAll(".card");
const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const videoSrc = card.dataset.video;

        videoPlayer.src = videoSrc;

        modal.style.display = "flex";

        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);

        videoPlayer.play();

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.opacity = "0";

setTimeout(() => {
    modal.style.display = "none";
}, 300);
    videoPlayer.pause();

    videoPlayer.currentTime = 0;

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.opacity = "0";

setTimeout(() => {
    modal.style.display = "none";
}, 300);
        videoPlayer.pause();

        videoPlayer.currentTime = 0;

    }

});
document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        modal.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none";
        }, 300);

        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

});