export const getImage = (name, folders = []) => {
    
    const folderPath = folders.length > 0 ? `${folders.join("/")}/` : "";
    return new URL(`../assets/images/${folderPath}${name}`, import.meta.url)
        .href;
};

export const getImageSize = (itemToSplit, dimension) => {
    if (
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
