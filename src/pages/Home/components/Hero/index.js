import cloneTemplate from "../../../../js/utils/cloneTemplate";
import {
  attachEvent,
  createIntersectionObserver,
  fadeInObserver,
  navbarObserver,
  warningUnknownKeys,
} from "../../../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";

/**
 * Component that generates the Hero section for the home page.
 * It clones the structure from an HTML template, initializes scroll-based
 * navbar visibility, and applies entrance animations to the title and subtitle.
 *
 * @function Hero
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The hero section element with initialized observers and animations.
 */

export default function Hero({} = {}) {
  warningUnknownKeys(arguments, []);

  const hero = cloneTemplate(template, "home-hero-template").querySelector(
    ".hero",
  );

  const title = hero.querySelector(".hero__title");
  const dev = hero.querySelector(".hero__dev");

  navbarObserver(hero);

  fadeInObserver(title, "animated-element--fade-in-right");
  fadeInObserver(dev, "animated-element--fade-in-left");

  return hero;
}
