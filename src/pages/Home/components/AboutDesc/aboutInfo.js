import bbdd from "../../../../const/database/bbdd.js";

import { createPar } from "../../../../js/utils/utils.js";

export const createAboutDesc = (parent) => {
  const descriptions = bbdd.aboutDesc;
  descriptions.forEach((data) => {
    createAboutDescItem(parent, data);
  });
};

const createAboutDescItem = (parent, data) => {
  createPar({
    parent: parent,
    innerText: data,
  });
};
