import {
    addClass,
    removeClass,
    replaceClass,
    setStyle,
    getWindowScrollTop,
    createIntersectionObserver,
    writteDeleteMachine,
} from "./utils/utils";

import { createWorkItems } from "./components/works.js";
import { createAboutDesc } from "./components/aboutInfo.js";
import { createSkillsItems } from "./components/skills.js";
import { createCourses } from "./components/courses.js";

/* -------------------------- VARIABLES -------------------------- */

const body = document.querySelector("body");
let prevScrollTop = 0;

/* -------------------------- INICIALIZACIÓN DE APP -------------------------- */

const init = () => {
    const descContainer = document.querySelector(".sa-desc");
    const worksContainer = document.querySelector(".sw-works-container");
    const skillsContainer = document.querySelector(".ss-skills-container");
    const coursesContainer = document.querySelector(".s-career");
    const welcomeMsg = document.querySelector(".welcome-actions");

    createAboutDesc(descContainer);
    createWorkItems(worksContainer);
    createSkillsItems(skillsContainer);
    createCourses(coursesContainer);

    attachEvent(welcomeMsg, "animationend", handleAnimationEndWelcome);
    attachEvent(window, "scroll", handleScrollWindow);

    writteMachineObserver();
    topToBelowMovementObserver();
};

/* -------------------------- FUNCIONES -------------------------- */

// Attach/add events function

const attachEvent = (element, event, functionToAttach) => {
    element.addEventListener(event, functionToAttach);
};

// Handle events functions

const handleClickWelcomeBtn = (event) => {
    const welcomeMsg = document.querySelector(".welcome-actions");
    const welcomeScreen = document.querySelector(".welcome-screen");

    addClass(event.target, "pe-none");
    addClass(welcomeMsg, "wa-opacity-0");

    attachEvent(welcomeMsg, "animationend", handleAnimationEndWlcMsg);
    attachEvent(welcomeScreen, "animationend", handleAnimationEndWelcScreen);
};

const handleScrollWindow = () => {
    navbarColorLinks();
    navbarHide();
    setWindowPrevScrollTop(getWindowScrollTop());
};

const handleAnimationEndWelcome = () => {
    const welcomeBtn = document.querySelector(".welcome-btn");
    attachEvent(welcomeBtn, "click", handleClickWelcomeBtn);
};

const handleAnimationEndWlcMsg = (event) => {
    const welcomeScreen = document.querySelector(".welcome-screen");
    event.stopPropagation();
    addClass(event.target, "display-none");
    addClass(welcomeScreen, "ws-opacity-0");
    setStyle(body, "overflow", "auto");
};

const handleAnimationEndWelcScreen = (event) => {
    addClass(event.target, "display-none");
};

// Functions

const setWindowPrevScrollTop = (value) => {
    prevScrollTop = value;
};

const getWindowPrevScrollTop = () => {
    return prevScrollTop;
};

const topToBelowMovementObserver = () => {
    const tbMovesItems = document.querySelectorAll(".tb-move-off");

    createIntersectionObserver(
        [...tbMovesItems],
        topToBelowMovement,
        [],
        {
            threshold: 0.1,
        },
        true
    );
};

const topToBelowMovement = (element) => {
    replaceClass(element, "tb-move-off", "tb-move-on");
};

const writteMachineObserver = () => {
    const worksTitle = document.querySelector(".s-works .title-h2 span");
    const worksTextToDelete = worksTitle.textContent;
    const worksTextToWrite = "ORKS";
    const careerTitle = document.querySelector(".s-career .title-h2 span");
    const careerTextToDelete = careerTitle.textContent;
    const careerTextToWrite = "AREER";

    const parametersCallback = [
        {
            element: worksTitle,
            textToDelete: worksTextToDelete,
            textToWrite: worksTextToWrite,
            delayToWrite: 80,
            delayToDelete: 80,
        },
        {
            element: careerTitle,
            textToDelete: careerTextToDelete,
            textToWrite: careerTextToWrite,
            delayToWrite: 80,
            delayToDelete: 80,
        },
    ];

    createIntersectionObserver(
        [worksTitle, careerTitle],
        writteDeleteMachine,
        parametersCallback,
        {
            threshold: 1,
        },
        true
    );
};

const navbarHide = () => {
    const navbar = document.querySelector(".navbar");
    const scrollTop = getWindowScrollTop();

    if (scrollTop > getWindowPrevScrollTop()) {
        addClass(navbar, "navbar-hidden");
    } else {
        removeClass(navbar, "navbar-hidden");
    }
};

const navbarColorLinks = () => {
    const navbarLinks = Array.from(document.querySelectorAll(".navbar-link"));
    const navbar = document.querySelector(".navbar");

    const scrollTop = getWindowScrollTop();

    const aboutSection = document.querySelector(".s-about");
    const skillsSection = document.querySelector(".s-skills");

    const aboutSectionTop = aboutSection.offsetTop;
    const skillsSectionTop = skillsSection.offsetTop;

    const seeAllWorksBtnContainer = document.querySelector(".sw-action-btn");

    let colorLinks = "var(--text-white)";

    const aboutSectionBottom =
        aboutSection.offsetTop + aboutSection.clientHeight;
    const skillsSectionBottom =
        skillsSection.offsetTop + skillsSection.clientHeight;

    // Conditions

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
        colorLinks = "var(--bcc-black)";
    }

    // Execution

    navbarLinks.forEach((link) => {
        setStyle(link, "color", colorLinks);
    });
};

/* -------------------------- EJECUCION DE APP -------------------------- */

init();
