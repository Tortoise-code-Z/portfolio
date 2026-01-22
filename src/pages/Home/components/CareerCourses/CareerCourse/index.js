import {
  fadeInObserver,
  validateProp,
  warningUnknownKeys,
} from "../../../../../js/utils/utils";
import InfiniteSlider from "../../../../../components/InfiniteSlider/infiniteSlider";
import CareerSlide from "./CareerSlide";
import { append } from "../../../../../js/utils/domHelpers";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import "./index.css";

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
  warningUnknownKeys(arguments, ["data", "directionSlide"]);

  // options of each prop
  const validDirectionSlideProps = ["left", "right"];

  // validations
  validateProp("data", data, "object");

  validateProp(
    "directionSlide",
    directionSlide,
    "string",
    validDirectionSlideProps,
  );

  const container = createElement({
    tag: "div",
    classNames: ["s-career__course"],
  });

  const acadaemy = InfiniteSlider({
    slideComponent: CareerSlide,
    dataSlides: [data.academy],
    duplicationSlides: 5,
    direction: directionSlide,
  });

  fadeInObserver(acadaemy, `animated-element--fade-in-${directionSlide}`);

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
    innerText: data.curse,
  });

  const tools = createElement({
    tag: "p",
    classNames: ["s-career__course-tools"],
    innerText: data.tools.join(" · ").toUpperCase(),
  });

  const moreInfo = createElement({
    tag: "div",
    classNames: ["s-career__course-more-info"],
    innerText: data.noteHourYear,
  });

  let note;

  if (data.note.state) {
    note = createElement({
      tag: "p",
      classNames: ["s-career__course-note"],
      innerText: data.note.value,
    });
  }

  const hours = createElement({
    tag: "p",
    classNames: ["s-career__course-hours"],
    innerText: data.hours,
  });

  const year = createElement({
    tag: "p",
    classNames: ["s-career__course-year"],
    innerText: data.year,
  });

  append(moreInfo, [note, hours, year]);
  append(dataCourse, [courseName, tools, moreInfo]);
  append(container, [acadaemy, dataCourse]);

  return container;
}
