import cloneTemplate from "../../../../js/utils/cloneTemplate";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import template from "./profile.html?raw";
import bbdd from "../../../../const/database/bbdd";
import AboutImg from "../../../../assets/images/about.gif";
import { fadeInObserver } from "../../../../js/utils/utils";
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
  const profile = cloneTemplate(template, "about-profile-template");

  const image = profile.querySelector(".s-about__profile-image");

  image.src = AboutImg;

  const profileTextContainer = profile.querySelector(".s-about__profile-text");

  const parseMarkdownBold = (text) => {
    return text.replace(
      /\*\*(.*?)\*\*/g,
      "<span class= 'u-text-regular'>$1</span>",
    );
  };

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

  const aboutText = profile.querySelector(".s-about__profile-about");
  const devName = profile.querySelector(".s-about__profile-name");

  fadeInObserver(aboutText, "animated-element--fade-in-right");
  fadeInObserver(devName, "animated-element--fade-in-left");
  fadeInObserver(image, "animated-element--fade-in-top");

  return profile;
}
