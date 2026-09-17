import cloneTemplate from "../../js/utils/cloneTemplate.js";
import template from "./navbarProductDetail.html?raw";
import templateDefault from "./navbar.html?raw";
import "./Navbar.css";
import { scrollVisibilitty } from "../../js/utils/utils.js";
import { append, getElement } from "../../js/utils/domHelpers.js";
import { t } from "../../js/i18n/index.js";
import LanguageSwitcher from "../LanguageSwitcher/index.js";

/**
 * Component that generates the site's main navigation bar.
 * Implements visibility logic based on the user's scroll behavior.
 *
 * @function Navbar
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The DOM element representing the main navigation.
 */

export default function Navbar() {
  const navbar = getElement(
    ".navbar",
    cloneTemplate(templateDefault, "navbar-template")
  );

  getElement('a[href="#works"]', navbar).textContent = t("nav.works");
  append(getElement(".navbar__group", navbar), [LanguageSwitcher()]);

  scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

  return navbar;
}

/**
 * Component that generates a navigation bar variant specifically for project details.
 * It uses a distinct template while maintaining scroll-based visibility logic.
 *
 * @function NavbarProductDetail
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The DOM element representing the product detail navigation.
 */

export function NavbarProductDetail() {
  const navbar = getElement(
    ".navbar",
    cloneTemplate(template, "navbar-template-pd")
  );

  getElement('a[href="#tech-stack"]', navbar).textContent = t("nav.techStack");
  append(getElement(".navbar__group", navbar), [LanguageSwitcher()]);

  scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

  return navbar;
}
