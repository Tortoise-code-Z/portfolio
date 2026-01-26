import FloatingTitle from "../../../components/FloatingTitle";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { getQueryParams, navbarObserver } from "../../../js/utils/utils";
import "./index.css";
import ImagesSlider from "../../../components/ImagesSlider";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";

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
  const currentWork = bbdd.works.find((w) => w.id === Number(id));

  const section = createElement({
    tag: "section",
    classNames: ["pd-s-gallery"],
    attributes: {
      "data-navbar-color": "white",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    text: "Galería",
    icon: svg.gallery,
    theme: "light",
    iconPosition: "left",
    upperCase: true,
    top: 50,
  });

  const imagesCarrousel = ImagesSlider({
    images: currentWork.images.screenshots,
  });

  append(section, [title, imagesCarrousel]);

  return section;
}
