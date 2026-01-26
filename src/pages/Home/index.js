import { append, getElement } from "../../js/utils/domHelpers";
import Navbar from "../../components/Navbar";
import DefaultFooter from "../../components/Footer/DefaultFooter";
import Hero from "./Hero";
import Profile from "./Profile";
import Works from "./Works";
import Skills from "./Skills";
import Career from "./CareerCourses";
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

append(getElement(".home__header"), [Navbar(), Hero()]);
append(getElement(".home__main"), [Profile(), Works(), Skills(), Career()]);
append(getElement(".home__footer"), [DefaultFooter()]);
