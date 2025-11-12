import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../js/utils/utils";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import "./index.css";

export default function Home({ ...props } = {}) {
    // // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Home. Será ignorada."
            );
        }
    });

    const fragment = createFragment();

    let manolo = "manolo";

    append(fragment, [Hero({ manolo }), Profile()]);

    return fragment;
}
