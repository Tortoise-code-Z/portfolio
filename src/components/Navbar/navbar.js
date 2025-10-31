import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./navbar.html?raw";
import "./navbar.css";
import "../Link/link.css";

export default function Navbar() {
  return cloneTemplate(template, "navbar-template");
}
