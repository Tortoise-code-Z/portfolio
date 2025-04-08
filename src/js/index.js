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
        prevScrollTop = Math.round(window.scrollY);
    });

    writteMachineObserver();
    topToBelowMovementObserver();
};

//* ------------------------------------- FUNCIONES -------------------------------------*/

const createIntersectionObserver = (
    elements,
    callback,
    parametersCallback = [],
    options = {},
    observeOnce = false
) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const itemParametersCallback = parametersCallback.find(
                    (item) => item.element === entry.target
                );

                if (itemParametersCallback) {
                    callback(itemParametersCallback);
                } else {
                    callback(entry.target);
                }

                if (observeOnce) observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach((element) => observer.observe(element));
};

const navbarScrollActions = () => {
    navbarColorLinks();
    navbarHide();
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
            threshold: 1,
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

const writteDeleteMachine = async (data) => {
    await deleteMachine(data);
    await writteMachine(data);
};

const deleteMachine = async (data) => {
    const { element, textToDelete, delayToDelete } = data;

    for (let i = textToDelete.length; i >= 0; i--) {
        element.textContent = textToDelete.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, delayToDelete));
    }
};

const writteMachine = async (data) => {
    const { element, textToWrite, delayToWrite } = data;

    for (let i = 0; i < textToWrite.length; i++) {
        element.textContent += textToWrite[i];
        await new Promise((resolve) => setTimeout(resolve, delayToWrite));
    }
};

const scrollUp = () => {
    const scrollTop = window.scrollY;

    if (prevScrollTop >= scrollTop) {
        return true;
    }

    return false;
};

const scrollDown = () => {
    const scrollTop = Math.round(window.scrollY);

    if (prevScrollTop < scrollTop) {
        return true;
    }

    return false;
};

const offsetTopObserver = (coordY) => {
    const scrollTop = Math.round(window.scrollY);
    return scrollTop >= coordY;
};

const offsetRangeObserver = (top, bottom) => {
    const scrollTop = window.scrollY;
    console.log(scrollTop, top);
    return scrollTop > top && scrollTop < bottom;
};

const offsetBottomObserver = (coordY) => {
    const scrollTop = Math.round(window.scrollY);
    return scrollTop >= coordY;
};

const navbarHide = () => {
    const scrollTop = Math.round(window.scrollY);

    if (scrollTop > prevScrollTop) {
        addClass(navbar, "navbar-hidden");
    } else {
        removeClass(navbar, "navbar-hidden");
    }
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
