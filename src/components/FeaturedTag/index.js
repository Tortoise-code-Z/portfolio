import { svg } from "../../const/database/bbdd_consts";
import { createElement } from "../../js/utils/createElementsHelper";
import "./index.css";

export default function FeaturedTag({} = {}) {
  const tag = createElement({
    tag: "div",
    classNames: ["featured-tag"],
  });

  createElement({
    tag: "span",
    innerHTML: svg.info,
    innerText: "¡Proyecto Destacado!",
    parent: tag,
  });

  return tag;
}
