import {
    addClass,
    removeClass,
    replaceClass,
    containsClass,
    setStyle,
    getWindowScrollTop,
    createIntersectionObserver,
    writteDeleteMachine,
} from "./utils/utils";

//* ------------------------------------- VARIABLES -------------------------------------*/

const body = document.querySelector("body");
let prevScrollTop = 0;

//* ------------------------------------- INICIALIZACIÓN DE APP -------------------------------------*/

const init = () => {
    const welcomeMsg = document.querySelector(".welcome-actions");

    addWelcMsgAnimationEvent(welcomeMsg);
    addWindowScrollEvent();

    writteMachineObserver();
    topToBelowMovementObserver();
};

//* ------------------------------------- FUNCIONES -------------------------------------*/

// Attach/add events functions

const addWelcMsgAnimationEvent = (welcomeMsg) => {
    welcomeMsg.addEventListener("animationend", handleAnimationWelcomeEvent);
};

const addWindowScrollEvent = () => {
    window.addEventListener("scroll", handleScrollWindowEvent);
};

const addWelcomeBtnClickEvent = (welcomeBtn) => {
    welcomeBtn.addEventListener("click", handleWelcomeBtnClickEvent);
};

const addWelcMsgDisapearAnimationEvent = (welcomeMsg) => {
    welcomeMsg.addEventListener("animationend", handleWelcMsgAnimationEvent);
};

const addWelcomeScreenAnimationEvent = (welcomeScreen) => {
    welcomeScreen.addEventListener(
        "animationend",
        handleWelcScreenAnimationEvent
    );
};

// Handle events functions

const handleWelcomeBtnClickEvent = (event) => {
    const welcomeMsg = document.querySelector(".welcome-actions");
    const welcomeScreen = document.querySelector(".welcome-screen");

    addClass(event.target, "pe-none");
    addClass(welcomeMsg, "wa-opacity-0");

    addWelcMsgDisapearAnimationEvent(welcomeMsg);
    addWelcomeScreenAnimationEvent(welcomeScreen);
};

const handleScrollWindowEvent = () => {
    navbarColorLinks();
    navbarHide();
    setWindowPrevScrollTop(getWindowScrollTop());
};

const handleAnimationWelcomeEvent = () => {
    const welcomeBtn = document.querySelector(".welcome-btn");
    addWelcomeBtnClickEvent(welcomeBtn);
};

const handleWelcMsgAnimationEvent = (event) => {
    const welcomeScreen = document.querySelector(".welcome-screen");
    event.stopPropagation();
    addClass(event.target, "display-none");
    addClass(welcomeScreen, "ws-opacity-0");
    setStyle(body, "overflow", "auto");
};

const handleWelcScreenAnimationEvent = (event) => {
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
    const aboutTitle = document.querySelector(".sa-about-title");
    const aboutDesc = document.querySelector(".sa-desc");
    const aboutStrengths = document.querySelector(".sa-dev-strengths");
    const skillsElements = Array.from(document.querySelectorAll(".ss-wd-item"));
    const careerSlidesElements = Array.from(
        document.querySelectorAll(".sc-centername")
    );
    const careerElements = Array.from(
        document.querySelectorAll(".sc-course-data")
    );
    const skillsTitleElements = Array.from(
        document.querySelectorAll(".s-skills .title-h3")
    );

    createIntersectionObserver(
        [
            aboutTitle,
            aboutDesc,
            aboutStrengths,
            ...skillsElements,
            ...skillsTitleElements,
            ...careerElements,
            ...careerSlidesElements,
        ],
        topToBelowMovement,
        [],
        {
            threshold: 0.1,
        },
        true
    );
};

const topToBelowMovement = (element) => {
    removeClass(element, "tb-move");
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

    const aboutSectionTop = document.querySelector(".s-about").offsetTop;
    const skillsSectionTop = document.querySelector(".s-skills").offsetTop;

    const seeAllWorksBtnContainer = document.querySelector(".sw-action-btn");

    let colorLinks = "var(--text-white)";

    // Conditions
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

    // Execution
    if (aboutCondition || skillsCondition) {
        colorLinks = "var(--bcc-black)";
    }

    navbarLinks.forEach((link) => {
        setStyle(link, "color", colorLinks);
    });
};

/* ------------------------------------- EJECUCION DE APP -------------------------------------*/

init();
