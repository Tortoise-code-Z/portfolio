import bbdd from "../../json/bbdd.json";
import {
    addClass,
    createElement,
    appendElement,
    setAttribute,
    setText,
} from "../utils/utils";

export const createWorkItems = (parent) => {
    const works = bbdd.works;
    works.forEach((data) => {
        createWorkItem(parent, data);
    });
};

const createWorkItem = (parent, data) => {
    const {
        name,
        year,
        type,
        tools,
        backgroundImg,
        githubURL,
        workImg,
        workUrl,
    } = data;

    const fragment = document.createDocumentFragment();

    const itemContainer = createWorkItemContainer(fragment);

    const item = createWorkItemBox(itemContainer);

    const itemLink = createWorkItemLink(item, githubURL, name);
    const itemLinkFigure = createWorkItemLinkFig(itemLink);
    createWorkItemLinkImg(itemLinkFigure, name, workImg);
    createWorkItemBackgImg(item, backgroundImg);

    const itemData = createWorkItemData(item);
    createWorkItemDataYear(itemData, year);
    createWorkItemDataProyectName(itemData, name);
    createWorkItemDataType(itemData, type);
    createWorkItemDataTools(itemData, tools);

    appendElement(fragment, parent);
};

const createWorkItemContainer = (parent) => {
    const element = createElement("div");
    addClass(element, "sw-work-item-container");
    appendElement(element, parent);

    return element;
};

const createWorkItemBox = (parent) => {
    const element = createElement("div");
    addClass(element, "sw-work-item");
    appendElement(element, parent);

    return element;
};

const createWorkItemLink = (parent, githubURL, proyectName) => {
    const element = createElement("a");
    addClass(element, "sw-proyect-link");
    setAttribute(element, "href", githubURL || "#");
    setAttribute(element, "title", `${proyectName} Proyect`);
    appendElement(element, parent);

    return element;
};

const createWorkItemLinkFig = (parent) => {
    const element = createElement("figure");
    addClass(element, "sw-item-img");
    appendElement(element, parent);

    return element;
};

const createWorkItemLinkImg = (parent, proyectName, workImg) => {
    const element = createElement("img");
    setAttribute(element, "src", workImg);
    setAttribute(element, "title", `${proyectName} Proyect`);
    setAttribute(element, "alt", `${proyectName} Proyect`);

    appendElement(element, parent);

    return element;
};

const createWorkItemBackgImg = (parent, backgroundImg) => {
    const element = createElement("img");
    addClass(element, "sw-wi-bccimg");
    setAttribute(element, "src", backgroundImg);
    appendElement(element, parent);

    return element;
};

const createWorkItemData = (parent) => {
    const element = createElement("div");
    addClass(element, "sw-item-data");
    appendElement(element, parent);

    return element;
};

const createWorkItemDataYear = (parent, year) => {
    const element = createElement("div");
    addClass(element, "sw-item-date");
    setText(element, year);
    appendElement(element, parent);

    return element;
};

const createWorkItemDataProyectName = (parent, name) => {
    const element = createElement("h3");
    addClass(element, "title-h3");
    setText(element, name);
    appendElement(element, parent);

    return element;
};

const createWorkItemDataType = (parent, type) => {
    const element = createElement("div");
    addClass(element, "sw-item-type");
    setText(element, type);
    appendElement(element, parent);

    return element;
};

const createWorkItemDataTools = (parent, tools) => {
    const element = createElement("div");
    addClass(element, "sw-item-tools");
    setText(element, tools.join(" · "));
    appendElement(element, parent);

    return element;
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
