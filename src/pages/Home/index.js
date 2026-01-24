import { append } from "../../js/utils/domHelpers";
import Navbar from "../../components/Navbar/navbar.js";
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

append(document.querySelector(".home__header"), [Navbar(), Hero()]);

append(document.querySelector(".home__main"), [
  Profile(),
  Works(),
  Skills(),
  Career(),
]);

append(document.querySelector(".home__footer"), [DefaultFooter()]);
