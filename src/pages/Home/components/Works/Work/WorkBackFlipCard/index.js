import {
  validateProp,
  warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";
import { getImage } from "../../../../../../js/utils/images";
import { append } from "../../../../../../js/utils/domHelpers";
import template from "./index.html?raw";
import cloneTemplate from "../../../../../../js/utils/cloneTemplate";
import { svg } from "../../../../../../const/database/bbdd_consts";
import Link from "../../../../../../components/Link/link";
import projectDetailUrl from "../../../../../ProjectDetail/index.html?url";

/**
 * @typedef {Object} WorkBackFlipCardProps
 * @property {Object} data - The comprehensive project data object.
 * @property {string} data.id - Unique identifier used for the project detail URL.
 * @property {string} data.name - The title of the project.
 * @property {string} data.visibility - The visibility status (e.g., "Public", "Private").
 * @property {string} data.projectRole - The role held during the project (e.g., "Frontend Developer").
 * @property {string} data.year - The year the project was completed.
 * @property {Object} data.images - Image metadata for the background.
 * @property {Object} data.techStack - Technologies used in the project.
 * @property {Object[]} data.techStack.tools.fastTools - List of main tools to display.
 * @property {Object} data.links - URLs for external resources (github, demo).
 */

/**
 * Component that renders the back side of a project flip card.
 * It displays detailed metadata including an image, role, tech stack, and action buttons.
 * Action buttons include links to the source code, a live demo (if available),
 * and a "More Info" button that redirects to the Project Detail page with the project ID.
 *
 * @function WorkBackFlipCard
 * @param {WorkBackFlipCardProps} [props={}] - Configuration properties for the back card.
 * @returns {HTMLElement} The populated back-card element from the template.
 */

export default function WorkBackFlipCard({ data = {} } = {}) {
  // validations
  validateProp("data", data, "object");

  const container = cloneTemplate(
    template,
    "back-flip-card-template",
  ).querySelector(".s-works__back-card");

  const image = container.querySelector(".s-works__back-card-image");
  const title = container.querySelector(".s-works__back-card-title");
  const type = container.querySelector(".s-works__back-card-type");
  const tools = container.querySelector(".s-works__back-card-tools");
  const year = container.querySelector(".s-works__back-card-year");

  image.src = getImage(data.images.backgroundImg.src);
  image.alt = data.images.backgroundImg.alt;
  image.title = data.images.backgroundImg.alt;
  image.width = data.images.backgroundImg.width;
  image.height = data.images.backgroundImg.height;

  title.innerText = data.name;
  type.innerText = `${data.visibility} project · ${data.projectRole}`;
  tools.innerText = data.techStack.tools.fastTools
    .map((tool) => tool.tool)
    .join(" · ")
    .toUpperCase();
  year.innerText = data.year;

  const actions = container.querySelector(".s-works__back-card-actions");

  const code = Link({
    classNames: ["s-works__back-card-action"],
    isButton: true,
    theme: "light",
    variant: "secondary",
    text: "Code",
    href: data.links.github,
    target: "_blank",
    icon: svg.code,
  });

  const moreInfo = Link({
    classNames: ["s-works__back-card-action"],
    isButton: true,
    theme: "light",
    variant: "secondary",
    text: "More Info",
    href: projectDetailUrl,
    params: {
      id: `${data.id}`,
    },
    icon: svg.info,
  });

  let demo;
  if (data.links.demo) {
    demo = Link({
      classNames: ["s-works__back-card-action"],
      isButton: true,
      theme: "light",
      variant: "secondary",
      text: "Demo",
      href: data.links.demo,
      target: "_blank",
      icon: svg.demo,
    });
  }

  append(actions, [code, demo, moreInfo]);

  return container;
}
