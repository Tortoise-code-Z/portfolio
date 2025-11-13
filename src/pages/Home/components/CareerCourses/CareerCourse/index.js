import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import InfiniteSlider from "../../../../../components/InfiniteSlider/infiniteSlider";
import CareerSlide from "./CareerSlide";
import { append } from "../../../../../js/utils/domHelpers";
import { createElement } from "../../../../../js/utils/createElementsHelper";

export default function CareerCourse({ data } = {}) {
    console.log("data", data.academy);
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = createElement({
        tag: "div",
        classNames: ["s-career__course"],
    });

    const acadaemy = InfiniteSlider({
        slideComponent: CareerSlide,
        dataSlides: [data.academy],
        duplicationSlides: 5,
        direction: "left",
    });

    const dataCourse = createElement({
        tag: "div",
        classNames: ["s-career__course-data"],
    });

    const courseName = createElement({
        tag: "h3",
        classNames: ["s-career__course-name"],
        innerText: data.curse,
    });

    const tools = createElement({
        tag: "p",
        classNames: ["s-career__course-tools"],
        innerText: data.tools.join(" · ").toUpperCase(),
    });

    const moreInfo = createElement({
        tag: "div",
        classNames: ["s-career__course-more-info"],
        innerText: data.noteHourYear,
    });

    let note;

    if (data.note.state) {
        note = createElement({
            tag: "p",
            classNames: ["s-career__course-note"],
            innerText: data.note.value,
        });
    }

    const hours = createElement({
        tag: "p",
        classNames: ["s-career__course-hours"],
        innerText: data.hours,
    });

    const year = createElement({
        tag: "p",
        classNames: ["s-career__course-year"],
        innerText: data.year,
    });

    append(moreInfo, [note, hours, year]);
    append(dataCourse, [courseName, tools, moreInfo]);
    append(container, [acadaemy, dataCourse]);

    return container;
}
