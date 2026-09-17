import { validateProps } from "./argumentsValidation.js";

/**
 * Dynamic import of all image assets within the assets/images directory.
 * Uses Vite's import.meta.glob with eager loading to resolve URLs at build time.
 * * @type {Object.<string, string>}
 */
const images = import.meta.glob("../../assets/images/**/*", {
  eager: true,
  as: "url",
});

/**
 * Retrieves the URL of a specific image based on its name and optional folder path.
 *
 * @function getImage
 * @param {string} name - The filename of the image (including extension).
 * @param {string[]} [folders=[]] - An array of subfolder names representing the path.
 * @returns {string|undefined} The resolved image URL or undefined if not found.
 */
export const getImage = (name, folders = []) => {
  validateProps({
    name: { value: name, type: "string" },
    folders: { value: folders, type: "array" },
  });
  const folderPath = folders.length > 0 ? `${folders.join("/")}/` : "";
  const key = `../../assets/images/${folderPath}${name}`;
  return images[key];
};

/**
 * Extracts the width or height from a formatted string (e.g., "name_1920x1080").
 * * @function getImageSize
 * @param {string} itemToSplit - The string containing the dimensions separated by 'x' and prefixed by '_'.
 * @param {"width"|"height"} dimension - The specific dimension to extract.
 * @returns {number|undefined} The extracted dimension as a number, or undefined if the input is invalid.
 */
export const getImageSize = (itemToSplit, dimension) => {
  validateProps({
    itemToSplit: { value: itemToSplit, type: "string" },
    dimension: {
      value: dimension,
      type: "string",
      allowedValues: ["width", "height"],
    },
  });
  if (!itemToSplit || itemToSplit.length === 0) return undefined;
  const splitNumber = dimension === "width" ? 0 : 1;
  return Number(itemToSplit.split("_")[1].split("x")[splitNumber]);
};
