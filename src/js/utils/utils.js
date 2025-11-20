export function scrollVisibilitty(element, classToHidden) {
    if (!element instanceof HTMLElement && !classToHidden instanceof String)
        return;

    let lastScrollPosition = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollPosition = window.scrollY;

        const scrollMargin = 50;

        if (
            currentScrollPosition > lastScrollPosition &&
            currentScrollPosition > scrollMargin
        ) {
            element.classList.add(classToHidden);
        } else if (currentScrollPosition < lastScrollPosition) {
            element.classList.remove(classToHidden);
        }

        lastScrollPosition = currentScrollPosition;
    });
}

// Modificación en tu archivo de utilidad:
export const createIntersectionObserver = (
    elements,
    callback,
    parametersCallback = [],
    options = {},
    observeOnce = false
) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const itemParametersCallback = parametersCallback.find(
                (item) => item?.element === entry?.target
            );

            if (itemParametersCallback) {
                callback(itemParametersCallback, entry); // Pasamos 'entry' también
            } else {
                callback(entry); // El 'entry' es el argumento principal
            }

            if (observeOnce && entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach((element) => observer.observe(element));
};

export const navbarObserver = (element) => {
    setTimeout(() => {
        createIntersectionObserver(
            [element],
            (entry) => navbarObserverCallback(entry),
            [],
            { threshold: 0, rootMargin: "-100px 0px -90% 0px" },
            false
        );
    }, 0);
};

export const navbarObserverCallback = (entry) => {
    const navbar = document.querySelector(".navbar");
    // Obtenemos el color requerido de la sección que acaba de cambiar de estado
    const requiredColor = entry.target.getAttribute("data-navbar-color");

    // La clase a añadir o quitar
    const colorClass = `navbar--color-${requiredColor}`;

    // La clase de color opuesto (asumiendo que solo tienes 'white' y 'black')
    const oppositeColorClass =
        requiredColor === "white"
            ? "navbar--color-black"
            : "navbar--color-white";

    if (entry.isIntersecting) {
        // Acción principal: Cuando la sección ENTRA
        // ------------------------------------------

        // Quitar el color opuesto (si existe)
        if (navbar.classList.contains(oppositeColorClass)) {
            navbar.classList.remove(oppositeColorClass);
        }

        // Añadir el color de la sección actual
        navbar.classList.add(colorClass);

        //
    } else {
        // Acción secundaria: Cuando la sección SALE
        // -------------------------------------------
        // Si la sección sale, NO HACEMOS NADA aquí.
        // Esto es porque la *siguiente* sección (que estará entrando)
        // o la *anterior* (que estará saliendo por el otro extremo)
        // activará su propio 'entry.isIntersecting = true' y establecerá el color correcto.
        // Si intentas cambiar el color en 'else' (salida),
        // la barra parpadeará, porque dos secciones a la vez
        // pueden estar 'no intersectando' por un momento.
    }
};

export const writteDeleteMachine = async (data) => {
    await deleteMachine(data);
    await writteMachine(data);
};

export const deleteMachine = async (data) => {
    const { element, textToDelete, delayToDelete } = data;

    for (let i = textToDelete.length; i >= 0; i--) {
        element.textContent = textToDelete.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, delayToDelete));
    }
};

export const writteMachine = async (data) => {
    const { element, textToWrite, delayToWrite } = data;

    for (let i = 0; i < textToWrite.length; i++) {
        element.textContent += textToWrite[i];
        await new Promise((resolve) => setTimeout(resolve, delayToWrite));
    }
};

export const isOnRange = (valueToCheck, min, max) => {
    return valueToCheck >= min && valueToCheck <= max;
};

export const isEqualMajor = (valueToCheck, valueToCompare) => {
    return valueToCheck >= valueToCompare;
};

export const isMajor = (valueToCheck, valueToCompare) => {
    return valueToCheck > valueToCompare;
};

export const isEqualMinor = (valueToCheck, valueToCompare) => {
    return valueToCheck <= valueToCompare;
};

export const isMinor = (valueToCheck, valueToCompare) => {
    return valueToCheck < valueToCompare;
};

export const attachEvent = (element, event, functionToAttach) => {
    element.addEventListener(event, functionToAttach);
};

export function validateProp(name, value, type, allowedValues = null) {
    // Permitir múltiples tipos (por ejemplo, ['string', 'number'])
    const types = Array.isArray(type) ? type : [type];

    const isHTMLElementType = types.includes("HTMLElement");

    // --- 1. Validar HTMLElement ---
    if (isHTMLElementType) {
        const isHTMLElement =
            typeof HTMLElement !== "undefined" && value instanceof HTMLElement;

        if (!isHTMLElement) {
            throw new TypeError(
                `"${name}" → Debe ser de tipo HTMLElement. Recibido: ${
                    value?.constructor?.name || typeof value
                }`
            );
        }
    }

    // --- 2. Validar arrays ---
    else if (types.includes("array")) {
        if (!Array.isArray(value)) {
            throw new TypeError(
                `"${name}" → Debe ser un array. Recibido: ${typeof value}`
            );
        }
    }

    // --- 3. Validar tipos primitivos ---
    else {
        const valueType = typeof value;
        if (!types.includes(valueType)) {
            throw new TypeError(
                `"${name}" → Debe ser de tipo ${types.join(
                    " o "
                )}. Recibido: ${valueType}`
            );
        }
    }

    // --- 4. Validar valores permitidos ---
    if (allowedValues && !allowedValues.includes(value)) {
        throw new RangeError(
            `"${name}" → Solo se permiten los valores: ${allowedValues.join(
                ", "
            )}. Recibido: ${value}`
        );
    }

    return true; // ✅ Si pasa todas las validaciones
}

export const warningUnknownKeys = (args, allowedKeys) => {
    // warning unknown keys
    Object.keys(args[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Home. Será ignorada."
            );
        }
    });
};
