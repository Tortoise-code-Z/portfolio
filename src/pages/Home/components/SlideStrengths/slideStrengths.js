import {
  createDiv,
  createPar,
  createSpan,
} from "../../../../js/utils/createElementsHelper";
import { validateProp } from "../../../../js/utils/utils";
import "./slideStrengths.css";

export default function SlideStrengths({ data = {} } = {}) {
  // keys to receive
  const allowedKeys = ["data"];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(
        `Propiedad desconocida:${key} en SlideStrengths. Será ignorada.`
      );
    }
  });

  // validations
  validateProp("data", data, "object");

  // slide
  const slide = createDiv({
    classNames: ["slider__strenth"].filter(Boolean),
  });

  console.log(slide);

  // icon
  const icon = createSpan({
    classNames: ["slider__strength-icon"].filter(Boolean),
    innerHTML: data.iconRef,
  });

  // title
  const title = createPar({
    classNames: ["slider__strength-title"].filter(Boolean),
    innerText: data.name,
  });

  slide.appendChild(icon);
  slide.appendChild(title);

  return slide;
}
