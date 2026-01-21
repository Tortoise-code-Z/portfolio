import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./navbarProductDetail.html?raw";
import templateDefault from "./navbar.html?raw";
import "./navbar.css";
import "../Link/link.css";
import { scrollVisibilitty } from "../../js/utils/utils";

/**
 * Componente que genera la barra de navegación principal del sitio.
 * Implementa lógica de visibilidad basada en el scroll del usuario.
 * * @function Navbar
 * @param {Object} [props={}] - Objeto de propiedades (actualmente no utilizado).
 * @returns {HTMLElement} El elemento del DOM que representa la navegación principal.
 */

export default function Navbar({} = {}) {
  const navbar = cloneTemplate(
    templateDefault,
    "navbar-template",
  ).querySelector(".navbar");

  scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

  return navbar;
}

/**
 * Componente que genera una variante de la barra de navegación específica para el detalle de projecto.
 * Utiliza una plantilla diferenciada pero mantiene la lógica de visibilidad por scroll.
 * * @function NavbarProductDetail
 * @param {Object} [props={}] - Objeto de propiedades (actualmente no utilizado).
 * @returns {HTMLElement} El elemento del DOM que representa la navegación de detalle de producto.
 */

export function NavbarProductDetail({} = {}) {
  const navbar = cloneTemplate(template, "navbar-template-pd").querySelector(
    ".navbar",
  );

  scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

  return navbar;
}
