const welcomeScreen = document.querySelector(".welcome-screen");
const msgWelcome = document.querySelector(".welcome-actions");
const webAudio = new Audio("/src/assets/audio/homeAudio.mp3");
const btnAudioAlow = document.querySelector(".audioBtn");
console.log(webAudio);

window.addEventListener("DOMContentLoaded", () => {
    msgWelcome.classList.add("opacity-1");
    btnAudioAlow.addEventListener("click", () => {
        msgWelcome.classList.remove("opacity-1");
        webAudio.play();
        webAudio.volume = 0.1;
        msgWelcome.addEventListener("transitionend", () => {
            setTimeout(() => {
                welcomeScreen.style.opacity = "0";
                welcomeScreen.addEventListener("transitionend", () => {
                    welcomeScreen.style.display = "none";
                });
            }, 3000);
        });
    });
});
