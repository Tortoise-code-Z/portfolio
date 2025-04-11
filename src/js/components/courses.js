import bbdd from "../../json/bbdd.json";
import {
    appendElement,
    createDiv,
    createFragment,
    createHtag,
    createPar,
    createSpan,
} from "../utils/utils";

export const createCourses = (parent) => {
    const courses = bbdd.career;

    courses.forEach((course, index) => {
        createCourse(parent, course, index);
    });
};

const createCourse = (parent, data, index) => {
    const { academy, curse, tools, note, hours, year, isFinished } = data;

    const fragment = createFragment();

    const courseSlider = createDiv({
        parent: fragment,
        classNames: ["sc-centername", "tb-move-off"],
    });

    for (let i = 0; i < 2; i++) {
        const courseSlide = createDiv({
            parent: courseSlider,
            classNames: [
                "sc-c-item",
                index % 2 !== 0 ? "slide" : "slide-reverse",
            ],
        });
        for (let j = 0; j < 4; j++) {
            createSpan({
                parent: courseSlide,
                innerText: academy.join("#"),
            });
        }
    }

    const courseDataContainer = createDiv({
        parent: fragment,
        classNames: ["sc-course-data", "tb-move-off"],
    });

    // Course name
    createHtag({
        level: 3,
        parent: courseDataContainer,
        classNames: ["title-h3"],
        innerText: curse,
    });

    // Course is finished msg
    if (!isFinished.state) {
        createPar({
            parent: courseDataContainer,
            classNames: ["sc-cd-state"],
            innerText: isFinished.msg.toUpperCase(),
        });
    }

    // Curse tools
    createPar({
        parent: courseDataContainer,
        classNames: ["sc-cd-tools"],
        innerText: tools.join(" · "),
    });

    const courseOthersData = createDiv({
        parent: courseDataContainer,
        classNames: ["sc-cd-others"],
    });

    // Curse note
    if (note.state) {
        createPar({
            parent: courseOthersData,
            classNames: ["sc-cd-note"],
            innerText: note.value,
        });
    }

    // Curse hours
    createPar({
        parent: courseOthersData,
        classNames: ["sc-cd-hours"],
        innerText: hours,
    });

    // Curse year
    createPar({
        parent: courseOthersData,
        classNames: ["sc-cd-date"],
        innerText: year,
    });

    appendElement(fragment, parent);
};
