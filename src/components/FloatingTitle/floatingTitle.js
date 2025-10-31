import {
  createDiv,
  createHtag,
  createSpan,
} from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import "./floatingTitle.css";

export default function FloatingTitle({
  text = "",
  icon = "",
  level = 2,
  theme = "dark",
  iconPosition = "right",
} = {}) {
  // keys to recibe
  const allowedKeys = ["text", "icon", "level", "theme", "iconPosition"];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Button. Será ignorada.`);
    }
  });

  // options of each prop
  const validHTags = [1, 2, 3, 4, 5, 6];
  const validThemes = ["dark", "light"];
  const validIconPositions = ["left", "right"];

  // validations
  validateProp("text", text, "string");
  validateProp("icon", icon, "string");
  validateProp("level", level, "number", validHTags);
  validateProp("theme", theme, "string", validThemes);
  validateProp("iconPosition", iconPosition, "string", validIconPositions);

  const container = createDiv({
    classNames: [
      "floating-title",
      "floating-title--animation",
      iconPosition === "left" ? "u-flex-row-reverse" : null,
    ],
  });

  const title = createHtag({
    level: level,
    classNames: [
      "floating-title__text",
      theme === "dark"
        ? "floating-title__text--dark"
        : "floating-title__text--light",
    ],
    innerText: text,
  });

  const span = createSpan({
    classNames: [
      "floating-title__icon",
      theme === "dark"
        ? "floating-title__icon--dark"
        : "floating-title__icon--light",
    ],
    innerHTML: icon,
  });

  container.appendChild(title);
  container.appendChild(span);

  return container;
}
