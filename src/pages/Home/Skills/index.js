import FloatingTitle from "../../../components/FloatingTitle";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import { navbarObserver } from "../../../js/utils/utils";
import "./index.css";
import Skill from "./Skill";

/**
 * Component that generates the Skills section of the website.
 * Iterates through the skills database to render individual skill
 * rows with alternating layout directions.
 *
 * @function Skills
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The section element containing the skills grid and animations.
 */

export default function Skills({} = {}) {
  const section = createElement({
    tag: "section",
    classNames: ["s-skills"],
    attributes: {
      "data-navbar-color": "black",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    upperCase: true,
    text: "Habilidades",
    icon: svg.arrowRightDown,
    theme: "dark",
    iconPosition: "right",
  });

  const skillItemsContainer = createElement({
    tag: "div",
    classNames: ["s-skills__items-container"],
  });

  bbdd.skills.forEach((skill, index) =>
    append(skillItemsContainer, [
      Skill({
        title: skill.title,
        tools: skill.tools,
        flexReverse: index % 2 !== 0,
      }),
    ]),
  );

  append(section, [title, skillItemsContainer]);

  return section;
}
