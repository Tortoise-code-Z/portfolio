import Button from "../../components/Button/button";
import { svg } from "../../const/database/bbdd_consts";

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

main.appendChild(button);
