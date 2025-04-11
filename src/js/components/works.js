import bbdd from "../../json/bbdd.json";
import {
    appendElement,
    createLink,
    createFigure,
    createDiv,
    createImg,
    createPar,
    createHtag,
    createFragment,
} from "../utils/utils";

export const createWorkItems = (parent) => {
    const works = bbdd.works;
    works.forEach((data) => {
        createWorkItem(parent, data);
    });
};

const createWorkItem = (parent, data) => {
    const { name, year, type, tools, backgroundImg, githubURL, workImg } = data;

    // Temporal box
    const fragment = createFragment();

    const workContainer = createDiv({
        parent: fragment,
        classNames: ["sw-work-item-container"],
    });

    const work = createDiv({
        parent: workContainer,
        classNames: ["sw-work-item"],
    });

    const workLink = createLink({
        classNames: ["sw-proyect-link"],
        parent: work,
        attributes: { href: githubURL || "#", title: `${name} Proyect` },
    });

    const workLinkFigure = createFigure({
        classNames: ["sw-item-img"],
        parent: workLink,
    });

    // workLink image
    createImg({
        parent: workLinkFigure,
        attributes: {
            src: workImg,
            title: `${name} Proyect`,
            alt: `${name} Proyect`,
        },
    });

    // Background work image
    createImg({
        parent: work,
        classNames: ["sw-wi-bccimg"],
        attributes: { src: backgroundImg },
    });

    const workData = createDiv({
        parent: work,
        classNames: ["sw-item-data"],
    });

    // Proyect year
    createPar({
        parent: workData,
        classNames: ["sw-item-date"],
        innerText: year,
    });

    // Proyect name
    createHtag({
        level: 3,
        classNames: ["title-h3"],
        innerText: name,
    });

    // Proyect type
    createDiv({
        parent: workData,
        classNames: ["sw-item-type"],
        innerText: type,
    });

    // Proyect tools
    createDiv({
        parent: workData,
        classNames: ["sw-item-tools"],
        innerText: tools.join(" · "),
    });

    appendElement(fragment, parent);
};

// FORMA QUE DEBERÍA TENER EL ITEM

/**
    <div class="sw-work-item-container">
        <div class="sw-work-item">
            <a href="#" class="sw-proyect-link" title="Astrohub Proyect">
                <figure class="sw-item-img">
                    <img src="./src/assets/images/Astrohub-Proyect-Caricature.jpg" alt="Astrohub proyect"
                        title="Astrohub Proyect">
                </figure>
            </a>
            <img class="sw-wi-bccimg" src="./src/assets/images/Astrohub-Proyect.webp" alt="">

            <div class="sw-item-data">
                <p class="sw-item-date">2024</p>
                <h3 class="title-h3">Astrohub</h3>
                <p class="sw-item-type">Curse work</p>
                <div class="sw-item-tools">html · css · javascript · php · mysql</div>
            </div>
        </div>
    </div>
 */
