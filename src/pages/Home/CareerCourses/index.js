import WritteMachineTitle from "../../../components/WritteMachineTitle";
import bbdd from "../../../const/database/bbdd.js";
import { createElement } from "../../../js/utils/createElementsHelper.js";
import { append } from "../../../js/utils/domHelpers.js";
import { navbarObserver } from "../../../js/utils/utils.js";
import CareerCourse from "./CareerCourse";
import "./index.css";

/**
 * Component that generates the Career section of the website.
 * Render a list of courses/experience items rendered via infinite sliders.
 *
 * @function Career
 * @param {Object} [props={}] - Configuration properties (currently none expected).
 * @returns {HTMLElement} The section element containing the career timeline and courses.
 */

export default function Career() {
  const section = createElement({
    tag: "section",
    classNames: ["s-career"],
    attributes: {
      "data-navbar-color": "white",
    },
  });

  navbarObserver(section);

  const title = WritteMachineTitle({
    classNames: ["s-career__title"],
    fixText: "Car",
    dinamicInitText: "arer",
    dinamicFinalText: "rera",
  });

  const courses = createElement({
    tag: "div",
    classNames: ["s-career__courses"],
  });

  bbdd.career.forEach((item, index) => {
    append(courses, [
      CareerCourse({
        academy: item.academy,
        curse: item.curse,
        hours: item.hours,
        noteState: item.note.state,
        noteValue: item.note.value,
        tools: item.tools,
        year: item.year,
        directionSlide: index % 2 === 0 ? "left" : "right",
      }),
    ]);
  });

  append(section, [title, courses]);

  return section;
}
