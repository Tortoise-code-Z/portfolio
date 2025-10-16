import { IMAGES_PATH_RE } from "../consts/general";
import { regExpCheck } from "./general";

export const getImage = (name, folders = []) => {
    if (!regExpCheck(name, IMAGES_PATH_RE) || !name || name.length === 0)
        return undefined;
    const folderPath = folders.length > 0 ? `${folders.join("/")}/` : "";
    return new URL(`../assets/images/${folderPath}${name}`, import.meta.url)
        .href;
};

export const getImageSize = (itemToSplit, dimension) => {
    if (
        !regExpCheck(itemToSplit, IMAGES_PATH_RE) ||
        !itemToSplit ||
        itemToSplit.length === 0
    )
        return undefined;
    const splitNumber = dimension === "width" ? 0 : 1;
    return Number(itemToSplit.split("_")[1].split("x")[splitNumber]);
};

export const getImageData = (url, alt) => {
    return {
        image: getImage(url, ["static"]),
        width: getImageSize(url, "width"),
        height: getImageSize(url, "height"),
        alt: alt,
    };
};
