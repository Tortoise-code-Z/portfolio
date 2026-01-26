import { fadeInObserver } from "../../../../js/utils/utils.js";
import InfiniteSlider from "../../../../components/InfiniteSlider";
import CareerSlide from "./CareerSlide";
import { append } from "../../../../js/utils/domHelpers.js";
import { createElement } from "../../../../js/utils/createElementsHelper.js";
import "./index.css";
import { validateProps } from "../../../../js/utils/argumentsValidation.js";

/**
 * @typedef {Object} CareerCourseProps
 * @property {string} academy - Information about the academy for the infinite slider.
 * @property {string} curse - The name of the course or degree.
 * @property {string[]} tools - List of technologies or tools used.
 * @property {boolean} noteState - Indicates if the note should be displayed.
 * @property {string} noteValue - The text content of the note.
 * @property {string} hours - Duration or total hours of the course.
 * @property {string} year - Completion or attendance year.
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

export default function CareerCourse(props = {}) {
  const {
    academy,
    curse,
    hours,

    tools,
    year,
    noteState,
    noteValue,
    directionSlide = "left",
  } = props;

  validateProps({
    directionSlide: {
      value: directionSlide,
      type: "string",
      allowedValues: ["left", "right"],
    },
    academy: { value: academy, type: "string" },
    curse: { value: curse, type: "string" },
    hours: { value: hours, type: "string" },
    noteState: { value: noteState, type: "boolean" },
    noteValue: { value: noteValue, type: "string" },
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
    dataSlides: [{ title: academy }],
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
  });

  let noteNode;

  if (noteState) {
    noteNode = createElement({
      tag: "p",
      classNames: ["s-career__course-note"],
      innerText: noteValue,
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
