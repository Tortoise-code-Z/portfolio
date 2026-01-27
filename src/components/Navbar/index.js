import cloneTemplate from "../../js/utils/cloneTemplate.js";
import template from "./navbarProductDetail.html?raw";
import templateDefault from "./navbar.html?raw";
import "./Navbar.css";
import { scrollVisibilitty } from "../../js/utils/utils.js";
import { getElement } from "../../js/utils/domHelpers.js";

/**
 * Component that generates the site's main navigation bar.
 * Implements visibility logic based on the user's scroll behavior.
 *
 * @function Navbar
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The DOM element representing the main navigation.
 */

export default function Navbar({} = {}) {
  const navbar = getElement(
    ".navbar",
    cloneTemplate(templateDefault, "navbar-template"),
  );

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

export function NavbarProductDetail({} = {}) {
  const navbar = getElement(
    ".navbar",
    cloneTemplate(template, "navbar-template-pd"),
  );

  scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

  return navbar;
}
