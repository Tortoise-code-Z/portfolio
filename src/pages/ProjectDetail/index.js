import { NavbarProductDetail } from "../../components/Navbar/index.js";
import { ProductDetailFooter } from "../../components/Footer/ProductDetailFooter/index.js";
import { append } from "../../js/utils/domHelpers.js";
import { initI18n, t } from "../../js/i18n/index.js";
import AboutProject from "./About/index.js";
import AditionalConfigs from "./AditionalConfigs/index.js";
import DevelopmentProcess from "./DevelopmentProcess/index.js";
import Gallery from "./Gallery/index.js";
import Hero from "./Hero/index.js";
import "./index.css";
import TechStack from "./TechStack/index.js";

/**
 * Entry point for the Project Detail page.
 * This script initializes and orchestrates the layout for the specific project view,
 * populating the header, main, and footer sections with specialized components.
 * * It builds the following structure:
 * - **Header**: Specific product detail navbar and a project-focused Hero.
 * - **Main**: Comprehensive project breakdown including "About", Tech Stack,
 * Development Process, Image Gallery, and Additional Configurations.
 * - **Footer**: Specialized footer for the project detail context.
 */

initI18n();
document.title = t("meta.title");
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) metaDescription.setAttribute("content", t("meta.description"));

append(document.querySelector(".project-detail__header"), [
  NavbarProductDetail(),
  Hero(),
]);

append(document.querySelector(".project-detail__main"), [
  AboutProject(),
  TechStack(),
  DevelopmentProcess(),
  Gallery(),
  AditionalConfigs(),
]);

append(document.querySelector(".project-detail__footer"), [
  ProductDetailFooter(),
]);
