import { addClass, removeClass, replaceClass } from "./utils/utils";

//* ------------------------------------- VARIABLES -------------------------------------*/

const welcomeBtn = document.querySelector(".welcome-btn");
const welcomeScreen = document.querySelector(".welcome-screen");
const welcomeActions = document.querySelector(".welcome-actions");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
let prevScrollTop = 0;

//* ------------------------------------- INICIALIZACIÓN DE APP -------------------------------------*/

const init = () => {
    welcomeActions.addEventListener("animationend", () => {
        welcomeScreenTransition();
    });

    window.addEventListener("scroll", () => {
        navbarScrollActions();
    });
};

//* ------------------------------------- FUNCIONES -------------------------------------*/

const navbarScrollActions = () => {
    navbarColorLinks();
    navbarHide();
};

const navbarHide = () => {
    const scrollTop = Math.round(window.scrollY);

    if (scrollTop > prevScrollTop) {
        addClass(navbar, "navbar-hidden");
    } else {
        removeClass(navbar, "navbar-hidden");
    }

    prevScrollTop = scrollTop;
};

const navbarColorLinks = () => {
    const navbarLinks = Array.from(document.querySelectorAll(".navbar-link"));
    const scrollTop = Math.round(window.scrollY);

    const aboutSection = document.querySelector(".s-about");
    const skillsSection = document.querySelector(".s-skills");
    const seeAllWorksBtnContainer = document.querySelector(".sw-action-btn");

    const aboutSectionTop = document.querySelector(".s-about").offsetTop;
    const skillsSectionTop = document.querySelector(".s-skills").offsetTop;

    const aboutSectionBottom =
        aboutSection.offsetTop + aboutSection.clientHeight;
    const skillsSectionBottom =
        skillsSection.offsetTop + skillsSection.clientHeight;

    const aboutCondition =
        scrollTop >= aboutSectionTop - navbar.clientHeight / 2 &&
        scrollTop < aboutSectionBottom - navbar.clientHeight / 2;

    const skillsCondition =
        scrollTop >=
            skillsSectionTop -
                navbar.clientHeight / 2 -
                seeAllWorksBtnContainer.clientHeight &&
        scrollTop < skillsSectionBottom - navbar.clientHeight / 2;

    if (aboutCondition || skillsCondition) {
        navbarLinks.forEach((link) => {
            link.style.color = "var(--text-black)";
        });

        return;
    }

    navbarLinks.forEach((link) => {
        link.style.color = "var(--text-white)";
    });
};

const welcomeActionAnimationEnd = (event) => {
    // Evita que el evento se propague al padre
    event.stopPropagation();

    addClass(welcomeActions, "display-none");
    body.style.overflow = "auto";
    addClass(welcomeScreen, "ws-opacity-0");

    welcomeActions.removeEventListener(
        "animationend",
        welcomeActionAnimationEnd
    );
};

const welcomeScreenAnimationEnd = () => {
    addClass(welcomeScreen, "display-none");

    welcomeActions.removeEventListener(
        "animationend",
        welcomeScreenAnimationEnd
    );
};

const welcomeScreenTransition = () => {
    welcomeBtn.addEventListener("click", () => {
        addClass(welcomeBtn, "pe-none");
        addClass(welcomeActions, "wa-opacity-0");

        welcomeActions.addEventListener(
            "animationend",
            welcomeActionAnimationEnd
        );

        welcomeScreen.addEventListener(
            "animationend",
            welcomeScreenAnimationEnd
        );
    });
};

/* ------------------------------------- EJECUCION DE APP -------------------------------------*/
init();
