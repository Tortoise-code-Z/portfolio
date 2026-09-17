import { append, getElement } from "../../js/utils/domHelpers.js";
import { initI18n, t } from "../../js/i18n/index.js";
import Navbar from "../../components/Navbar/index.js";
import DefaultFooter from "../../components/Footer/DefaultFooter/index.js";
import Hero from "./Hero/index.js";
import Profile from "./Profile/index.js";
import Works from "./Works/index.js";
import Skills from "./Skills/index.js";
import Career from "./CareerCourses/index.js";
import "./index.css";

/**
 * Entry point for the Home page.
 * This script orchestrates the assembly of the main landing page by selecting
 * specific DOM containers (header, main, footer) and appending their
 * corresponding functional components.
 * * It initializes the following structure:
 * - **Header**: Navbar and Hero section.
 * - **Main**: Profile, Works (Projects), Skills, and Career (Courses/Experience).
 * - **Footer**: Default footer component.
 */

initI18n();
document.title = t("meta.title");
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription)
  metaDescription.setAttribute("content", t("meta.description"));

append(getElement(".home__header"), [Navbar(), Hero()]);
append(getElement(".home__main"), [Profile(), Works(), Skills(), Career()]);
append(getElement(".home__footer"), [DefaultFooter()]);
