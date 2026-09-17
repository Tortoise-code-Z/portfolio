import { t } from "../../js/i18n/index.js";
import { svg } from "../../const/database/bbdd_consts.js";
import { createElement } from "../../js/utils/createElementsHelper.js";
import "./index.css";

export default function FeaturedTag() {
  const tag = createElement({
    tag: "div",
    classNames: ["featured-tag"],
  });

  createElement({
    tag: "span",
    innerHTML: svg.info,
    innerText: t("featured.tag"),
    parent: tag,
  });

  return tag;
}
