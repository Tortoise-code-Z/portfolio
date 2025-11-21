import {
    createDiv,
    createPar,
    createSpan,
} from "../../js/utils/createElementsHelper";
import { fadeInObserver, validateProp } from "../../js/utils/utils";
import "./noteMsg.css";
import { svg } from "../../const/database/bbdd_consts";
import { append } from "../../js/utils/domHelpers";

export default function NoteMsg({ type = "note", desc = "" } = {}) {
    // keys to receive
    const allowedKeys = ["desc", "type"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                `Propiedad desconocida: ${key} en NoteMsg. Será ignorada.`
            );
        }
    });

    // options of each prop
    const validType = ["warning", "note"];

    // validations
    validateProp("desc", desc, "string");
    validateProp("type", type, "string", validType);

    // note
    const note = createDiv({
        classNames: [
            "note-msg",
            type === "warning" ? "note-msg--warning" : "note-msg--info",
        ].filter(Boolean),
    });

    // title container
    const titleContainer = createDiv({
        classNames: ["note-msg__title-container"].filter(Boolean),
    });

    fadeInObserver(titleContainer, "animated-element--fade-in-right");

    // icon
    const icon = createSpan({
        classNames: ["note-msg__icon"].filter(Boolean),
        innerHTML: type === "note" ? svg.info : svg.warning,
    });

    // title
    const titleNode = createPar({
        classNames: ["note-msg__title"].filter(Boolean),
        innerText: type === "note" ? "Nota" : "Importante",
    });

    // description
    const description = createPar({
        classNames: ["note-msg__desc"].filter(Boolean),
        innerText: desc,
    });

    fadeInObserver(description, "animated-element--fade-in-left");

    append(titleContainer, [icon, titleNode]);
    append(note, [titleContainer, description]);

    return note;
}
