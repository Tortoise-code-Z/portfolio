import { createElement } from "../../js/utils/createElementsHelper";
import { getImage } from "../../js/utils/images";
import {
  addClass,
  append,
  containsClass,
  getElement,
  getElements,
  removeClass,
  setAttributes,
  setText,
} from "../../js/utils/domHelpers";
import cloneTemplate from "../../js/utils/cloneTemplate";
import { attachEvent, fadeInObserver } from "../../js/utils/utils";
import { svg } from "../../const/database/bbdd_consts";
import { validateProps } from "../../js/utils/argumentsValidation";
import "./index.css";
import Button from "../Button";
import template from "./index.html?raw";

/**
 * @typedef {Object} SliderImage
 * @property {string} src - Path or filename of the image.
 * @property {string} alt - Descriptive text for the image and its label.
 * @property {number} [width] - The width of the image.
 * @property {number} [height] - The height of the image.
 */

/**
 * @typedef {Object} ImagesSliderProps
 * @property {SliderImage[]} [images=[]] - List of images to be displayed in the carousel.
 */

/**
 * Component that generates an image carousel with arrow navigation,
 * indicators (bullets), transition animations, and a dynamic background.
 *
 * @function ImagesSlider
 * @param {ImagesSliderProps} [props={}] - Configuration properties for the slider.
 * @returns {HTMLElement} The root element of the image carousel.
 */

export default function ImagesSlider({ images = [] } = {}) {
  validateProps({
    images: { value: images, type: "array" },
  });

  let imageIndex = 0;
  let canClick = true;

  const root = getElement(
    ".images-slider",
    cloneTemplate(template, "images-slider-template"),
  );

  const imageLabel = getElement(".images-slider__label", root);
  const sliderTrack = getElement(".images-slider__track", root);
  const bulletsContainer = getElement(".images-slider__bullets", root);
  const buttonsContainer = getElement(".images-slider__buttons", root);

  fadeInObserver(sliderTrack, `animated-element--fade-in-left`);
  fadeInObserver(imageLabel, `animated-element--fade-in-right`);
  fadeInObserver(bulletsContainer, `animated-element--fade-in-left`);
  fadeInObserver(buttonsContainer, `animated-element--fade-in-right`);

  const nextButton = Button({
    variant: "arrow",
    icon: svg.arrowRight,
    title: "Next",
    theme: "light",
    onClick: () => turnSlide("next"),
    classNames: ["images-slider__button--next"],
  });

  const previousButton = Button({
    variant: "arrow",
    icon: svg.arrowLeft,
    title: "Previous",
    theme: "light",
    onClick: () => turnSlide("previous"),
  });

  const imageContainer = createElement({
    tag: "figure",
    classNames: ["images-slider__slide", "images-slider__slide--active"],
  });

  const imageToShow = createElement({
    tag: "img",
    classNames: ["images-slider__image"],
    attributes: {
      src: getImage(images[imageIndex].src, ["screenshots"]),
      title: images[imageIndex].alt,
      alt: images[imageIndex].alt,
    },
  });

  const sliderBg = createElement({
    tag: "img",
    classNames: ["images-slider__bg"],
    attributes: {
      src: getImage(images[imageIndex].src, ["screenshots"]),
      title: images[imageIndex].alt,
      alt: images[imageIndex].alt,
    },
  });

  const bullets = images.map((image, index) => {
    const bullet = createElement({
      tag: "img",
      classNames: [
        "images-slider__bullet",
        index === 0 ? "images-slider__bullet--active" : null,
      ].filter(Boolean),
      attributes: {
        src: getImage(image.src, ["screenshots"]),
        title: image.alt,
        alt: image.alt,
      },
    });

    attachEvent(bullet, "click", () => {
      if (index === imageIndex) return;
      const action = imageIndex < index ? "next" : "previous";
      turnSlide(action, index);
    });

    return bullet;
  });

  setText(imageLabel, images[imageIndex].alt);

  append(imageContainer, [imageToShow]);
  append(sliderTrack, [imageContainer]);
  append(root, [sliderBg]);
  append(buttonsContainer, [previousButton, nextButton]);

  bullets.forEach((bullet) => append(bulletsContainer, [bullet]));

  const setImageIndex = (action, index) => {
    if (index || index === 0) {
      imageIndex = index;
    } else {
      imageIndex =
        action === "previous"
          ? imageIndex === 0
            ? images.length - 1
            : imageIndex - 1
          : imageIndex === images.length - 1
            ? 0
            : imageIndex + 1;
    }
  };

  const createImageToShow = (direction, images, index) => {
    const container = createElement({
      tag: "figure",
      classNames: [
        "images-slider__slide",
        `images-slider__slide--in-to-${direction}`,
      ],
    });

    const image = createElement({
      tag: "img",
      classNames: ["images-slider__image"],
      attributes: {
        src: getImage(images[index].src, ["screenshots"]),
        title: images[index].alt,
        alt: images[index].alt,
      },
    });

    append(container, [image]);

    return container;
  };

  const turnSlide = (action, index) => {
    if (canClick) {
      canClick = false;
      setImageIndex(action, index);

      const direction = action === "previous" ? "right" : "left";

      const bullets = getElements(".images-slider__bullet", root);

      const bulletActive = bullets.find((bullet) =>
        containsClass(bullet, "images-slider__bullet--active") ? bullet : null,
      );

      const imageInDom = getElement(".images-slider__slide--active", root);
      const imageToShow = createImageToShow(direction, images, imageIndex);

      append(sliderTrack, [imageToShow]);

      removeClass(bulletActive, "images-slider__bullet--active");
      addClass(bullets[imageIndex], "images-slider__bullet--active");

      addClass(imageInDom, `images-slider__slide--out-to-${direction}`);

      setText(imageLabel, images[imageIndex].alt);

      setAttributes(sliderBg, {
        src: getImage(images[imageIndex].src, ["screenshots"]),
      });

      attachEvent(
        imageToShow,
        "animationend",
        () => {
          removeClass(imageToShow, `images-slider__slide--in-to-${direction}`);
          addClass(imageToShow, "images-slider__slide--active");
        },
        { once: true },
      );

      attachEvent(
        imageInDom,
        "animationend",
        () => {
          imageInDom.remove();
          canClick = true;
        },
        { once: true },
      );
    }
  };

  return root;
}
