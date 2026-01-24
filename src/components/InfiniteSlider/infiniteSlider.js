import { createElement } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { validateProps } from "../../js/utils/utils";
import "./infiniteSlider.css";

/**
 * @callback SlideComponentCallback
 * @param {Object} params
 * @param {Object} params.data - Specific data used to render the slide.
 * @returns {HTMLElement} The DOM element representing the slide content.
 */

/**
 * @typedef {Object} InfiniteSliderProps
 * @property {SlideComponentCallback} slideComponent - Function responsible for rendering each internal slide component.
 * @property {Array<Object>} [dataSlides=[]] - List of objects containing the information to be passed to each slide.
 * @property {3|4|5} [duplicationSlides=3] - Number of times the dataset will be duplicated to create the infinite effect.
 * @property {"left"|"right"} [direction="left"] - The direction of the slider animation.
 */

/**
 * Component that generates a continuous (infinite) motion carousel by cloning elements.
 *
 * @function InfiniteSlider
 * @param {InfiniteSliderProps} [props={}] - Configuration properties for the slider.
 * @returns {HTMLDivElement} The container element of the infinite slider.
 */

export default function InfiniteSlider({
  slideComponent = ({ data }) => HTMLElement,
  dataSlides = [],
  duplicationSlides = 3,
  direction = "left",
} = {}) {
  validateProps({
    slideComponent: { value: slideComponent, type: "function" },
    dataSlides: { value: dataSlides, type: "array" },
    direction: {
      value: direction,
      type: "string",
      allowedValues: ["right", "left"],
    },
    duplicationSlides: {
      value: duplicationSlides,
      type: "number",
      allowedValues: [3, 4, 5],
    },
  });

  const slider = createElement({
    tag: "div",
    classNames: ["slider"].filter(Boolean),
  });

  const sliderTrack = createElement({
    tag: "div",
    classNames: [
      "slider__track",
      `slider__track--animation-${duplicationSlides}-${direction}`,
    ].filter(Boolean),
  });

  for (let index = 0; index < duplicationSlides; index++) {
    dataSlides.forEach((data) => {
      const slide = createElement({
        tag: "div",
        classNames: ["slider__slide"].filter(Boolean),
      });

      const item = slideComponent({ data: data });

      append(slide, [item]);
      append(sliderTrack, [slide]);
    });
  }

  append(slider, [sliderTrack]);

  return slider;
}
