import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./navbarProductDetail.html?raw";
import templateDefault from "./navbar.html?raw";
import "./navbar.css";
import "../Link/link.css";
import { scrollVisibilitty } from "../../js/utils/utils";

export default function Navbar({} = {}) {
    const navbar = cloneTemplate(
        templateDefault,
        "navbar-template"
    ).querySelector(".navbar");

    scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

    return navbar;
}

export function NavbarProductDetail({} = {}) {
    const navbar = cloneTemplate(template, "navbar-template-pd").querySelector(
        ".navbar"
    );

    scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

    return navbar;
}
