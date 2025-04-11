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

    Object.entries(skills).forEach(([key, value], index) => {
        createSkillsItem(parent, value, index);
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

/**
 * 
 *  <h3 class="title-h3 ss-title-webdev tb-move-off">Web developent</h3>
    <div class="ss-wd-item tb-move-off">
        <p># HTLM</p>
        <p># CSS</p>
        <p># JAVASCRIPT</p>
        <p># PHP</p>
        <p># MYSQL</p>
    </div>
    <h3 class="title-h3 ss-title-frameworks tb-move-off">Frameworks / Libraries</h3>
    <div class="ss-wd-item ss-wdi-frameworks tb-move-off">
        <p># BOOTSTRAP</p>
        <p># REACT + TYPESCRIPT</p>
    </div>
    <h3 class="title-h3  ss-title-tools tb-move-off">Development tools / Workflow</h3>
    <div class="ss-wd-item tb-move-off">
        <p># GIT</p>
        <p># GITHUB</p>
        <p># NPM</p>
        <p># FIGMA</p>
    </div>
 */
