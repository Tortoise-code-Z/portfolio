import Button from "../../components/Button/button";
import FloatingTitle from "../../components/FloatingTitle/floatingTitle";
import Link from "../../components/Link/link";
import Navbar from "../../components/Navbar/navbar";
import NoteMsg from "../../components/noteMsg/noteMsg";
import Slider from "../../components/InfiniteSlider/infiniteSlider";
import WritteMachineTitle from "../../components/WritteMachineTitle/writteMachineTitle";
import bbdd from "../../const/database/bbdd";
import { svg } from "../../const/database/bbdd_consts";
import SlideStrengths from "./components/SlideStrengths/slideStrengths";
import InfiniteSlider from "../../components/InfiniteSlider/infiniteSlider";
import ImagesSlider from "../../components/ImagesSlider/imagesSlider";
import Cards from "../../components/Cards/Cards";

const main = document.querySelector(".home-main");

const button = Button({
  variant: "secondary",
  text: "Clicka aquí",
  theme: "dark",
  icon: svg.chatgpt,
  flexReverse: true,
  onClick: () => console.log("hola mundo"),
  disabled: false,
  title: "maricoooo",
});

const link = Link({
  variant: "primary",
  text: "Clicka aquí",
  theme: "light",
  icon: svg.chatgpt,
  disabled: false,
  title: "maricoooo",
  isButton: true,
  target: "_blank",
  href: "https://www.twitch.tv/videos/2605299920",
  flexReverse: true,
});

const link2 = Link({
  text: "Clicka aquí",
  title: "maricoooo",
  target: "_blank",
  href: "https://www.twitch.tv/videos/2605299920",
});

const title = FloatingTitle({
  text: "hola mundo",
  icon: svg.calendar,
  theme: "light",
  iconPosition: "left",
});

const writteTitle = WritteMachineTitle({
  fixText: "W",
  dinamicInitText: "SORK",
  dinamicFinalText: "ORKS",
});

const navbar = Navbar();

const note = NoteMsg({
  desc: "Jajaja si señor.",
  type: "warning",
});

const slider = InfiniteSlider({
  slideComponent: SlideStrengths,
  dataSlides: bbdd.strengths,
  duplicationSlides: 4,
  direction: "right",
});

const imagesSlider = ImagesSlider({
  images: bbdd.works[0].images.screenshots,
});

const imagesSlider2 = ImagesSlider({
  images: bbdd.works[2].images.screenshots,
});

const cards = Cards({
  data: bbdd.works[0].development_process.cards,
});

console.log(cards);

main.appendChild(button);
main.appendChild(link);
main.appendChild(link2);
main.appendChild(title);
main.appendChild(writteTitle);
main.appendChild(navbar);
main.appendChild(note);
main.appendChild(slider);
main.appendChild(imagesSlider);
main.appendChild(imagesSlider2);
main.appendChild(cards);
