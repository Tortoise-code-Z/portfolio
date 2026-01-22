import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { getQueryParams, navbarObserver } from "../../../js/utils/utils";
import "./index.css";
import ImagesSlider from "../../../components/ImagesSlider/imagesSlider";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";

/**
 * @typedef {Object} Screenshot
 * @property {string} src - The URL or path to the screenshot image.
 * @property {string} alt - Alternative text for the image.
 */

/**
 * @typedef {Object} ProjectImages
 * @property {Screenshot[]} screenshots - Array of screenshot objects for the project gallery.
 */

/**
 * Renders the "Gallery" section for the project detail view.
 * * This component fetches project screenshots based on the 'id' from the URL
 * query parameters and displays them using an interactive image slider component.
 * It also initializes a floating title and observes the navbar color transition.
 * * @function Gallery
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The section element containing the project screenshot gallery.
 */

export default function Gallery({} = {}) {
  // validations

  const id = getQueryParams("id");
  const section = createElement({
    tag: "section",
    classNames: ["pd-s-gallery"],
    attributes: {
      "data-navbar-color": "white",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    text: "Gallery",
    icon: svg.gallery,
    theme: "light",
    iconPosition: "left",
    upperCase: true,
    top: 50,
  });

  const imagesCarrousel = ImagesSlider({
    images: bbdd.works[id - 1].images.screenshots,
  });

  append(section, [title, imagesCarrousel]);

  return section;
}
