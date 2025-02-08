const welcomeScreen = document.querySelector(".welcome-screen");
const msgWelcome = document.querySelector(".welcome-actions");
const webAudio = new Audio("/src/assets/audio/homeAudio.mp3");
const btnAudioAlow = document.querySelector(".audioBtn");
const body = document.querySelector("body");
body.style.overflow = "hidden";

msgWelcome.classList.add("opacity-1");
btnAudioAlow.addEventListener("click", () => {
    msgWelcome.classList.remove("opacity-1");
    webAudio.play();
    webAudio.volume = 0.05;
    msgWelcome.addEventListener("transitionend", () => {
        setTimeout(() => {
            welcomeScreen.style.opacity = "0";
            welcomeScreen.addEventListener("transitionend", () => {
                welcomeScreen.style.display = "none";
                body.style.overflow = "";
            });
        }, 3000);
    });
});

// let memoryScroll = 0;
// window.addEventListener("scroll", () => {
//     let currentScrollTop = window.scrollY;

//     if (currentScrollTop > memoryScroll) {
//         Array.from(document.querySelectorAll(".transitioned-section")).forEach(
//             (item) => {
//                 let itemScrollTop = item.scrollTop;
//                 if (currentScrollTop >= itemScrollTop + 500) {
//                 }
//             }
//         );
//     }
// });
