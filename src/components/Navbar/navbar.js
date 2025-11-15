import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./navbar.html?raw";
import "./navbar.css";
import "../Link/link.css";
import { scrollVisibilitty } from "../../js/utils/utils";

export default function Navbar({} = {}) {
    const navbar = cloneTemplate(template, "navbar-template").querySelector(
        ".navbar"
    );

    // scrollVisibilitty(navbar, "navbar--hidden", "navbar--visible");

    return navbar;
}
