const images = import.meta.glob("../../assets/images/**/*", {
    eager: true,
    as: "url",
});

export const getImage = (name, folders = []) => {
    const folderPath = folders.length > 0 ? `${folders.join("/")}/` : "";
    const key = `../../assets/images/${folderPath}${name}`;
    console.log(key);
    return images[key];
};

export const getImageSize = (itemToSplit, dimension) => {
    if (!itemToSplit || itemToSplit.length === 0) return undefined;
    const splitNumber = dimension === "width" ? 0 : 1;
    return Number(itemToSplit.split("_")[1].split("x")[splitNumber]);
};
