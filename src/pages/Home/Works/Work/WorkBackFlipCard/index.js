import "./index.css";
import { getImage } from "../../../../../js/utils/images";
import {
  append,
  getElement,
  setAttributes,
  setText,
} from "../../../../../js/utils/domHelpers";
import template from "./index.html?raw";
import cloneTemplate from "../../../../../js/utils/cloneTemplate";
import { svg } from "../../../../../const/database/bbdd_consts";
import Link from "../../../../../components/Link/link";
import projectDetailUrl from "../../../../ProjectDetail/index.html?url";
import { validateProps } from "../../../../../js/utils/argumentsValidation";

/**
 * @typedef {Object} WorkBackFlipCardProps
 * @property {number} id - Unique identifier used for the project detail URL.
 * @property {string} name - The title of the project.
 * @property {string} visibility - The visibility status (e.g., "Public", "Private").
 * @property {string} projectRole - The role held during the project (e.g., "Frontend Developer").
 * @property {string} year - The year the project was completed.
 * @property {string} bgSrcImage - Src image data.
 * @property {string} bgAltImage - Alt image data.
 * @property {number} bgWidthImage - Width image data.
 * @property {number} bgHeightImage - Height image data.
 * @property {object[]} fastTools - List of fast tools to display.
 * @property {string} fastTools.tool - Tool icon to display.
 * @property {string|null} demoLink - URL for demo live project.
 * @property {string} githubLink - URL for github repo project.
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

export default function WorkBackFlipCard(props = {}) {
  const {
    bgAltImage,
    bgHeightImage,
    bgSrcImage,
    bgWidthImage,
    githubLink,
    fastTools,
    demoLink,
    id,
    name,
    projectRole,
    visibility,
    year,
  } = props;

  validateProps({
    id: { value: id, type: "number" },
    name: { value: name, type: "string" },
    visibility: { value: visibility, type: "string" },
    projectRole: { value: projectRole, type: "string" },
    year: { value: year, type: "string" },
    demoLink: { value: demoLink, type: ["string", "null"] },
    githubLink: { value: githubLink, type: "string" },
    fastTools: { value: fastTools, type: "array" },
    bgSrcImage: { value: bgSrcImage, type: "string" },
    bgAltImage: { value: bgAltImage, type: "string" },
    bgWidthImage: { value: bgWidthImage, type: "number" },
    bgHeightImage: { value: bgHeightImage, type: "number" },
  });

  fastTools.forEach((t) =>
    validateProps({ tool: { value: t.tool, type: "string" } }),
  );

  const container = getElement(
    ".s-works__back-card",
    cloneTemplate(template, "back-flip-card-template"),
  );

  const image = getElement(".s-works__back-card-image", container);
  const title = getElement(".s-works__back-card-title", container);
  const type = getElement(".s-works__back-card-type", container);
  const tools = getElement(".s-works__back-card-tools", container);
  const yearNode = getElement(".s-works__back-card-year", container);

  setAttributes(image, {
    src: getImage(bgSrcImage),
    alt: bgAltImage,
    title: bgAltImage,
    width: bgWidthImage,
    height: bgHeightImage,
  });

  setText(title, name);
  setText(type, `${visibility} project · ${projectRole}`);
  setText(yearNode, year);
  setText(
    tools,
    fastTools
      .map((tool) => tool.tool)
      .join(" · ")
      .toUpperCase(),
  );

  const actions = getElement(".s-works__back-card-actions", container);

  const code = Link({
    title: "Ir a github",
    classNames: ["s-works__back-card-action"],
    isButton: true,
    theme: "light",
    variant: "secondary",
    text: "Code",
    href: githubLink,
    target: "_blank",
    icon: svg.code,
  });

  const moreInfo = Link({
    title: "Ir a detalle",
    classNames: ["s-works__back-card-action"],
    isButton: true,
    theme: "light",
    variant: "secondary",
    text: "More details",
    href: projectDetailUrl,
    params: {
      id: `${id}`,
    },
    icon: svg.info,
  });

  let demo;
  if (demoLink) {
    demo = Link({
      title: "Ir a demo",
      classNames: ["s-works__back-card-action"],
      isButton: true,
      theme: "light",
      variant: "secondary",
      text: "Demo",
      href: demoLink,
      target: "_blank",
      icon: svg.demo,
    });
  }

  append(actions, [code, moreInfo]);

  if (demo) append(actions, [demo]);

  return container;
}
