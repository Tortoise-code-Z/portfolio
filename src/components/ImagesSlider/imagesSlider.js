import { createFigure, createImg } from "../../js/utils/createElementsHelper";
import { getImage } from "../../js/utils/images";
import {
    addClass,
    append,
    containsClass,
    removeClass,
    setAttribute,
    setText,
} from "../../js/utils/domHelpers";
import "./imagesSlider.css";
import "./imagesSlider.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate";

import template from "./imagesSlider.html?raw";
import { attachEvent } from "../../js/utils/utils";
import Button from "../Button/button";
import { svg } from "../../const/database/bbdd_consts";

export default function ImagesSlider({ images = [] } = {}) {
    let imageIndex = 0;
    let canClick = true;

    const root = cloneTemplate(
        template,
        "images-slider-template"
    ).firstElementChild;

    const imageLabel = root.querySelector(".images-slider__label");
    const sliderTrack = root.querySelector(".images-slider__track");
    const bulletsContainer = root.querySelector(".images-slider__bullets");
    const buttonsContainer = root.querySelector(".images-slider__buttons");

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

    const imageContainer = createFigure({
        classNames: ["images-slider__slide", "images-slider__slide--active"],
    });

    const imageToShow = createImg({
        classNames: ["images-slider__image"],
        attributes: {
            src: getImage(images[imageIndex].src, ["screenshots"]),
            title: images[imageIndex].alt,
            alt: images[imageIndex].alt,
        },
    });

    const sliderBg = createImg({
        classNames: ["images-slider__bg"],
        attributes: {
            src: getImage(images[imageIndex].src, ["screenshots"]),
            title: images[imageIndex].alt,
            alt: images[imageIndex].alt,
        },
    });

    const bullets = images.map((image, index) => {
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

        bullet.addEventListener("click", () => {
            if (index === imageIndex) return;
            const action = imageIndex < index ? "next" : "previous";
            turnSlide(action, index);
        });

        return bullet;
    });

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

    //   label text

    setText(imageLabel, images[imageIndex].alt);

    //   appends

    append(imageContainer, [imageToShow]);
    append(sliderTrack, [imageContainer]);
    append(root, [sliderBg]);
    append(buttonsContainer, [previousButton, nextButton]);
    bullets.forEach((bullet) => append(bulletsContainer, [bullet]));

    //   slide function auxiliar functions

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
        const container = createFigure({
            classNames: [
                "images-slider__slide",
                `images-slider__slide--in-to-${direction}`,
            ],
        });

        const image = createImg({
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

    // slide function

    const turnSlide = (action, index) => {
        if (canClick) {
            canClick = false;
            setImageIndex(action, index);

            //   variables

            const direction = action === "previous" ? "right" : "left";

            const bullets = Array.from(
                root.querySelectorAll(".images-slider__bullet")
            );

            const bulletActive = bullets.find((bullet) =>
                containsClass(bullet, "images-slider__bullet--active")
                    ? bullet
                    : null
            );

            const imageInDom = root.querySelector(
                ".images-slider__slide--active"
            );
            const imageToShow = createImageToShow(
                direction,
                images,
                imageIndex
            );

            //   appends

            append(sliderTrack, [imageToShow]);

            //   bullets actions

            removeClass(bulletActive, "images-slider__bullet--active");
            addClass(bullets[imageIndex], "images-slider__bullet--active");

            //   movement of image in dom

            addClass(imageInDom, `images-slider__slide--out-to-${direction}`);

            //   Imagelabel

            setText(imageLabel, images[imageIndex].alt);

            //   slider bg image

            setAttribute(
                sliderBg,
                "src",
                getImage(images[imageIndex].src, ["screenshots"])
            );

            //  animation events

            attachEvent(
                imageToShow,
                "animationend",
                () => {
                    removeClass(
                        imageToShow,
                        `images-slider__slide--in-to-${direction}`
                    );
                    addClass(imageToShow, "images-slider__slide--active");
                },
                { once: true }
            );

            attachEvent(
                imageInDom,
                "animationend",
                () => {
                    imageInDom.remove();
                    canClick = true;
                },
                { once: true }
            );
        }
    };

    // slider
    return root;
}
