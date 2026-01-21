import Navbar from "../../components/Navbar/navbar";
import DefaultFooter from "../../components/Footer/DefaultFooter";
import { append } from "../../js/utils/domHelpers";
import Career from "./components/CareerCourses";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./index.css";

append(document.querySelector(".home__header"), [Navbar(), Hero()]);

append(document.querySelector(".home__main"), [
  Profile(),
  Works(),
  Skills(),
  Career(),
]);

append(document.querySelector(".home__footer"), [DefaultFooter()]);
