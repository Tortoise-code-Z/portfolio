import cloneTemplate from "../../js/utils/cloneTemplate";
import template from "./sectionTitle.html?raw";

export default function createSectionTitle(title, icon) {
  const clone = cloneTemplate(template, "sectionTitle-template");
  clone.querySelector(".title-h2").innerText = title;
  clone.querySelector(".title-icon").innerHTML = icon;

  return clone;
}
