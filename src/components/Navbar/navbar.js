import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./navbar.html?raw";
import "./navbar.css";

export default function createNavbar() {
  return cloneTemplate(template, "navbar-template");
}
