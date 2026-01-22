import { createElement } from "../../../../js/utils/createElementsHelper.js";
import FloatingTitle from "../../../../components/FloatingTitle/floatingTitle.js";
import { append } from "../../../../js/utils/domHelpers.js";
import ProfileData from "./ProfileData/index.js";
import Strengths from "./Strengths/index.js";
import "./index.css";
import {
  navbarObserver,
  warningUnknownKeys,
} from "../../../../js/utils/utils.js";
import { svg } from "../../../../const/database/bbdd_consts.js";

/**
 * Component that generates the Profile (About Me) section.
 * Appends the profile data and professional strengths sub-components.
 *
 * @function Profile
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The section element containing the profile information and strengths.
 */

export default function Profile({} = {}) {
  warningUnknownKeys(arguments, []);

  const section = createElement({
    tag: "section",
    classNames: ["s-about"],
    attributes: {
      "data-navbar-color": "black",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    upperCase: true,
    text: "Profile",
    icon: svg.arrowRightDown,
    theme: "dark",
    iconPosition: "right",
  });

  append(section, [title, ProfileData(), Strengths()]);

  return section;
}
