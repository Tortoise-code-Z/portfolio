import { NavbarProductDetail } from "../../components/Navbar/navbar";
import { ProductDetailFooter } from "../../components/Footer/ProductDetailFooter";
import { append } from "../../js/utils/domHelpers";
import AboutProject from "./About";
import AditionalConfigs from "./AditionalConfigs";
import DevelopmentProcess from "./DevelopmentProcess";
import Gallery from "./Gallery";
import Hero from "./Hero";
import "./index.css";
import TechStack from "./TechStack";

append(document.querySelector("#app-project-detail"), []);

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
