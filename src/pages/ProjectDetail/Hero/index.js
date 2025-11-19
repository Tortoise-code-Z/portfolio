import Link from "../../../components/Link/link";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import cloneTemplate from "../../../js/utils/cloneTemplate";
import { append } from "../../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";

export default function Hero({ id } = {}) {
    warningUnknownKeys(arguments, []);

    const work = bbdd.works.find((work) => work.id === Number(id));
    // options of each prop
    // const validProps = [];

    // validations
    // validateProp('prop', prop, 'string', validProps);

    const hero = cloneTemplate(template, "hero-template").querySelector(
        ".pd-hero"
    );

    const title = hero.querySelector(".pd-hero__title");
    const descTypeWeb = hero.querySelector(".pd-hero__desc-type-web");
    const typeProyectYear = hero.querySelector(".pd-hero__type-proyect-year");
    const actions = hero.querySelector(".pd-hero__actions");

    title.innerHTML = `${work.emphasisName.name[0]}<span style= "color: ${work.emphasisName.color}" class="pd-hero__title-accent">${work.emphasisName.name[1]}</span>`;
    descTypeWeb.innerText = `${work.shortDescription} · ${work.projectRole}`;
    typeProyectYear.innerText = `${work.visibility} Project · ${work.year}`;

    let demo;

    if (work.links.demo)
        demo = Link({
            isButton: true,
            icon: svg.demo,
            variant: "primary",
            theme: "dark",
            classNames: ["pd-hero__actions-demo"],
            href: work.links.demo,
            target: "_blank",
            text: "Demo",
        });

    const github = Link({
        isButton: true,
        icon: svg.code,
        variant: "primary",
        theme: "dark",
        classNames: ["pd-hero__actions-code"],
        href: work.links.github,
        target: "_blank",
        text: "Code",
    });

    append(actions, [demo, github]);

    return hero;
}
