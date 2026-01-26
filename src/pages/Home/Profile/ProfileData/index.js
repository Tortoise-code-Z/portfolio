import cloneTemplate from "../../../../js/utils/cloneTemplate";
import { createElement } from "../../../../js/utils/createElementsHelper";
import {
  append,
  getElement,
  setAttributes,
} from "../../../../js/utils/domHelpers";
import template from "./index.html?raw";
import bbdd from "../../../../const/database/bbdd";
import AboutImg from "../../../../assets/images/about.gif";
import { fadeInObserver, parseMarkdownBold } from "../../../../js/utils/utils";
import "./index.css";

/**
 * Component that renders the detailed profile data within the About section.
 * It populates a cloned HTML template with a profile image and description
 * paragraphs retrieved from the database, applying entry animations to each element.
 *
 * @function ProfileData
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {DocumentFragment} The cloned template content with dynamic data and observers.
 */

export default function ProfileData() {
  const profile = getElement(
    ".s-about__profile",
    cloneTemplate(template, "about-profile-template"),
  );

  const image = getElement(".s-about__profile-image", profile);

  setAttributes(image, { src: AboutImg });

  const profileTextContainer = getElement(".s-about__profile-text", profile);

  const profileText = bbdd.aboutDesc.map((text) => {
    return createElement({
      tag: "p",
      classNames: ["s-about__profile-text-item"],
      innerHTML: parseMarkdownBold(text) || "Sin descripción",
    });
  });

  profileText.forEach((item) => {
    append(profileTextContainer, [item]);
    fadeInObserver(item, "animated-element--fade-in-top");
  });

  const aboutText = getElement(".s-about__profile-about", profile);
  const devName = getElement(".s-about__profile-name", profile);

  fadeInObserver(aboutText, "animated-element--fade-in-right");
  fadeInObserver(devName, "animated-element--fade-in-left");
  fadeInObserver(image, "animated-element--fade-in-top");

  return profile;
}
