import bbdd from "../../../../const/database/bbdd.js";

import { svg } from "../../../../const/database/bbdd_consts.js";
import { getImage } from "../../../../js/utils/images.js";
import {
  appendElement,
  createLink,
  createFigure,
  createDiv,
  createImg,
  createPar,
  createHtag,
  createFragment,
  createButton,
} from "../../../../js/utils/utils.js";
import { createModal } from "../../../../components/Modal/modal.js";

export const createWorkItems = (parent) => {
  const works = bbdd.works;

  works.forEach((data) => {
    createWorkItem(parent, data, bbdd);
  });
};

const createWorkItem = (parent, data) => {
  const {
    id,
    name,
    year,
    visibility,
    techStack: {
      tools: { fastTools },
    },
    images: { workImg, backgroundImg },
    links: { github, demo },
  } = data;

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

  const workChildModal = createDiv({
    classNames: ["sw-child-modal"],
  });

  const workChildModalTitle = createHtag({
    parent: workChildModal,
    level: 2,
    classNames: ["sw-child-modal-title"],
    innerText: `${name} Proyect`,
  });

  const workChildAsk = createDiv({
    parent: workChildModal,
    classNames: ["sw-child-modal-ask"],
    innerText: "¿Qúe desea hacer?",
  });

  const workChildModalLinks = createDiv({
    parent: workChildModal,
    classNames: ["sw-child-modal-links"],
  });

  const modalLinks = [
    { name: "Github", link: github, icon: svg.github },
    { name: "Demo", link: demo, icon: svg.demo },
    {
      name: "Más detalles",
      link: `${
        import.meta.env.BASE_URL
      }src/templates/work_detail.html?id=${id}`,
      icon: svg.info,
    },
  ];

  modalLinks.forEach((link) => {
    if (!link.link) return;

    createLink({
      parent: workChildModalLinks,
      classNames: ["sw-child-modal-link", "button", "btn-primary"],
      attributes: {
        href: link.link,
        target: link === "Más detalles" ? "_self" : "_blank",
        rel: "noopener noreferrer",
      },
      innerHTML: `${link.icon} ${link.name}`,
    });
  });

  const workLink = createButton({
    classNames: ["sw-proyect-link"],
    parent: work,
    attributes: {
      title: `${name} Proyect`,
    },
    events: {
      click: () => {
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        createModal(workContainer, workChildModal, ["sw-modal"]);
      },
    },
  });

  const workLinkFigure = createFigure({
    classNames: ["sw-item-img"],
    parent: workLink,
  });

  // workLink image
  createImg({
    parent: workLinkFigure,
    attributes: {
      src: getImage(workImg.src),
      title: `${name} Proyect`,
      alt: `${name} Proyect`,
      width: workImg.width,
      heigth: workImg.heigth,
    },
  });

  // Background work image
  createImg({
    parent: work,
    classNames: ["sw-wi-bccimg"],
    attributes: {
      src: getImage(backgroundImg.src),
      width: backgroundImg.width,
      heigth: backgroundImg.heigth,
    },
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
    parent: workData,
    level: 3,
    classNames: ["title-h3"],
    innerText: name,
  });

  // Proyect type
  createDiv({
    parent: workData,
    classNames: ["sw-item-type"],
    innerText: `${visibility[0].toUpperCase()}${visibility.slice(1)} proyect`,
  });

  // Proyect tools
  createDiv({
    parent: workData,
    classNames: ["sw-item-tools"],
    innerText: fastTools
      .map((tool) => `${tool.tool[0].toUpperCase()}${tool.tool.slice(1)}`)
      .join(" · "),
  });

  // demo &&
  //     createLink({
  //         classNames: ["button", "btn-primary", "sw-link-github"],
  //         parent: workData,
  //         attributes: {
  //             target: "_blank",
  //             rel: "noopener noreferrer",
  //             href: demo || "#",
  //             title: `Ver ${name} página web`,
  //         },
  //         innerText: "Ver página web",
  //     });

  appendElement(fragment, parent);
};
