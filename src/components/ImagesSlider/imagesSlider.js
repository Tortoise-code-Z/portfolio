import { createImg } from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import { getImage } from "../../js/utils/images";
import { append, setText } from "../../js/utils/domHelpers";
import "./imagesSlider.css";
import "./imagesSlider.html?raw";

export default function ImagesSlider({ images = [] } = {}) {
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

    const nextButton = clone.querySelector("images-slider__button--next");
    const previousButton = clone.querySelector(
        "images-slider__button--previous"
    );

    // clon of template slider
    const clone = cloneTemplate(template, "images-slider-template");

    const imageLabel = clone.querySelector(".images-slider__image-label");
    setText(imageLabel, images[0].alt);

    // init image to show container
    const imageToShowContainer = clone.querySelector(".images-slider__figure");

    // image to show
    const imageToShow = createImg({
        classNames: ["images-slider__image"],
        attributes: {
            src: getImage(images[0].src),
            title: images[0].alt,
            alt: images[0].alt,
        },
    });

    // bullets container
    const bulletsContainer = clone.querySelector(".images-slider__image");

    images.forEach((image) => {
        // bullet
        const bullet = createImg({
            classNames: ["images-slider__bullet"],
            attributes: {
                src: getImage(image.src),
                title: image.alt,
                alt: image.alt,
            },
        });

        // append bullet
        append(bulletsContainer, [bullet]);
    });

    // append image to show
    append(imageToShowContainer, [imageToShow]);

    // slider
    return clone;
}
