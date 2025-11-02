import { createFigure, createImg } from "../../js/utils/createElementsHelper";
import { getImage } from "../../js/utils/images";
import {
    addClass,
    append,
    removeClass,
    setStyle,
    setText,
} from "../../js/utils/domHelpers";
import "./imagesSlider.css";
import "./imagesSlider.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate";

import template from "./imagesSlider.html?raw";

export default function ImagesSlider({ images = [] } = {}) {
    // clon of template slider
    const clone = cloneTemplate(template, "images-slider-template");
    const imageLabel = clone.querySelector(".images-slider__label");
    const sliderTrack = clone.querySelector(".images-slider__track");
    const bulletsContainer = clone.querySelector(".images-slider__bullets");
    const nextButton = clone.querySelector(".images-slider__button--next");
    const previousButton = clone.querySelector(
        ".images-slider__button--previous"
    );
    let imageIndex = 0;
    let canClick = true;

    // keys to receive
    const allowedKeys = ["images"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en ImagesSlider. Será ignorada."
            );
        }
    });

    setText(imageLabel, images[imageIndex].alt);

    const imageContainer = createFigure({
        classNames: ["images-slider__slide", "images-slider__slide--active"],
    });

    // init image to show
    const imageToShow = createImg({
        classNames: ["images-slider__image"],
        attributes: {
            src: getImage(images[imageIndex].src, ["screenshots"]),
            title: images[imageIndex].alt,
            alt: images[imageIndex].alt,
        },
    });

    append(imageContainer, [imageToShow]);
    append(sliderTrack, [imageContainer]);

    // ------------BULLETS------------ //

    images.forEach((image, index) => {
        const bullet = createImg({
            classNames: [
                "images-slider__bullet",
                index === 0 ? "images-slider__bullet--active" : null,
            ].filter(Boolean),
            attributes: {
                src: getImage(image.src, ["screenshots"]),
                title: image.alt,
                alt: image.alt,
                width: image.width,
                height: image.height,
            },
        });

        // append bullet
        append(bulletsContainer, [bullet]);
    });

    // Slide function
    const turnSlide = (action) => {
        if (canClick) {
            canClick = false;

            const bullet = Array.from(
                document.querySelectorAll(".images-slider__bullet")
            );

            removeClass(bullet[imageIndex], "images-slider__bullet--active");

            imageIndex =
                action === "previous"
                    ? imageIndex === 0
                        ? images.length - 1
                        : imageIndex - 1
                    : imageIndex === images.length - 1
                    ? 0
                    : imageIndex + 1;

            const direction = action === "previous" ? "left" : "right";
            addClass(bullet[imageIndex], "images-slider__bullet--active");

            const imageContainer = createFigure({
                classNames: [
                    "images-slider__slide",
                    `images-slider__slide--in-to-${direction}`,
                ],
            });

            // create image to show
            const imageToShow = createImg({
                classNames: ["images-slider__image"],
                attributes: {
                    src: getImage(images[imageIndex].src, ["screenshots"]),
                    title: images[imageIndex].alt,
                    alt: images[imageIndex].alt,
                },
            });

            append(imageContainer, [imageToShow]);
            append(sliderTrack, [imageContainer]);

            // Image showed in dom
            const imageInDom = document.querySelector(
                ".images-slider__slide--active"
            );

            addClass(imageInDom, `images-slider__slide--out-to-${direction}`);

            setText(imageLabel, images[imageIndex].alt);

            // add active class to actual image to show
            imageContainer.addEventListener("animationend", () => {
                console.log("imagetoshow");
                removeClass(
                    imageContainer,
                    `images-slider__slide--in-to-${direction}`
                );
                addClass(imageContainer, "images-slider__slide--active");
            });

            // Remove to the dom the image that moved out
            imageInDom.addEventListener("animationend", () => {
                console.log("imageindom");
                imageInDom.remove();
                canClick = true;
            });
        }
    };

    nextButton.addEventListener("click", () => turnSlide("next"));
    previousButton.addEventListener("click", () => turnSlide("previous"));

    // slider
    return clone;
}
