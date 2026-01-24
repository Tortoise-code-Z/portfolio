import { fadeInObserver, validateProp } from "../../../../js/utils/utils";
import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import CareerSlide from "./CareerSlide";
import { append } from "../../../../js/utils/domHelpers";
import { createElement } from "../../../../js/utils/createElementsHelper";
import "./index.css";
import { validateProps } from "../../../../js/utils/argumentsValidation";

/**
 * @typedef {Object} CareerCourseData
 * @property {Object} academy - Information about the academy for the infinite slider.
 * @property {string} curse - The name of the course or degree.
 * @property {string[]} tools - List of technologies or tools used.
 * @property {string} noteHourYear - Concatenated text or label for metadata.
 * @property {Object} note - Additional information about the course.
 * @property {boolean} note.state - Indicates if the note should be displayed.
 * @property {string} note.value - The text content of the note.
 * @property {string} hours - Duration or total hours of the course.
 * @property {string} year - Completion or attendance year.
 */

/**
 * @typedef {Object} CareerCourseProps
 * @property {CareerCourseData} data - The dataset containing academy and course details.
 * @property {"left"|"right"} [directionSlide="left"] - The entrance animation and slider direction.
 */

/**
 * Component that renders an individual course or experience entry within the Career section.
 * It features an infinite slider for the academy branding and a data section with details.
 * Both elements include scroll-triggered fade-in animations.
 *
 * @function CareerCourse
 * @param {CareerCourseProps} [props={}] - Configuration properties for the course component.
 * @returns {HTMLDivElement} The container element for the specific course entry.
 */

export default function CareerCourse({ data, directionSlide = "left" } = {}) {
  validateProps({
    data: { value: data, type: "object" },
    directionSlide: {
      value: directionSlide,
      type: "string",
      allowedValues: ["left", "right"],
    },
  });

  const { academy, curse, hours, note, noteHourYear, tools, year } = data;
  validateProps({
    academy: { value: academy, type: "object" },
    curse: { value: curse, type: "string" },
    hours: { value: hours, type: "string" },
    note: { value: note, type: "object" },
    "note.state": { value: note.state, type: "boolean" },
    "note.value": { value: note.value, type: "string" },
    noteHourYear: { value: noteHourYear, type: "string" },
    tools: { value: tools, type: "array" },
    year: { value: year, type: "string" },
  });

  tools.forEach((t) => validateProps({ tool: { value: t, type: "string" } }));

  const container = createElement({
    tag: "div",
    classNames: ["s-career__course"],
  });

  const academySlider = InfiniteSlider({
    slideComponent: CareerSlide,
    dataSlides: [academy],
    duplicationSlides: 5,
    direction: directionSlide,
  });

  fadeInObserver(academySlider, `animated-element--fade-in-${directionSlide}`);

  const dataCourse = createElement({
    tag: "div",
    classNames: ["s-career__course-data"],
  });

  fadeInObserver(
    dataCourse,
    `animated-element--fade-in-${directionSlide === "left" ? "right" : "left"}`,
  );

  const courseName = createElement({
    tag: "h3",
    classNames: ["s-career__course-name"],
    innerText: curse,
  });

  const toolsNode = createElement({
    tag: "p",
    classNames: ["s-career__course-tools"],
    innerText: tools.join(" · ").toUpperCase(),
  });

  const moreInfo = createElement({
    tag: "div",
    classNames: ["s-career__course-more-info"],
    innerText: noteHourYear,
  });

  let noteNode;

  if (note.state) {
    noteNode = createElement({
      tag: "p",
      classNames: ["s-career__course-note"],
      innerText: note.value,
    });
  }

  const hoursNode = createElement({
    tag: "p",
    classNames: ["s-career__course-hours"],
    innerText: hours,
  });

  const yearNode = createElement({
    tag: "p",
    classNames: ["s-career__course-year"],
    innerText: year,
  });

  append(moreInfo, [hoursNode, yearNode]);
  if (noteNode) append(moreInfo, [noteNode]);

  append(dataCourse, [courseName, toolsNode, moreInfo]);
  append(container, [academySlider, dataCourse]);

  return container;
}
