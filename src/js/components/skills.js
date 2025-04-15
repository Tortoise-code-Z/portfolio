import bbdd from "../../json/bbdd.json";
import {
    appendElement,
    createDiv,
    createFragment,
    createHtag,
    createPar,
} from "../utils/utils";

export const createSkillsItems = (parent) => {
    const skills = bbdd.skills;

    skills.forEach((skill, index) => {
        createSkillsItem(parent, skill, index);
    });
};

const createSkillsItem = (parent, data, index) => {
    const { title, tools } = data;

    const fragment = createFragment();

    createHtag({
        parent: fragment,
        level: 3,
        classNames: [
            "title-h3",
            "tb-move-off",
            index % 2 !== 0 ? "text-align-right" : "",
        ],
        innerText: title,
    });

    const toolsContainer = createDiv({
        parent: fragment,
        classNames: [
            "ss-wd-item",
            "tb-move-off",
            index % 2 !== 0 ? "align-right" : "",
        ],
    });

    tools.forEach((tool) => {
        createPar({
            parent: toolsContainer,
            innerText: `# ${tool.toUpperCase()}`,
        });
    });

    appendElement(fragment, parent);
};
