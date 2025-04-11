import bbdd from "../../json/bbdd.json";
import { createPar } from "../utils/utils";

export const createAboutDesc = (parent) => {
    const descriptions = bbdd.aboutDesc;
    descriptions.forEach((data) => {
        createAboutDescItem(parent, data);
    });
};

const createAboutDescItem = (parent, data) => {
    createPar({
        parent: parent,
        innerText: data,
    });
};

/**
 * 
 * <div class="sa-desc tb-move-off">
        <p>
            Comencé a programar de forma independiente en 2022 con CSS Y HTML. Luego de unos meses
            estudiando, decidí comenzar un curso superior fullstack.
        </p>
        <p>
            En él, puse a prueba mis habilidades tanto en el lado del cliente como en el backend. Sin
            embargo, no hay nada que me haya fascinado más que el frontend. Tanto diseñar como programar
            layouts es una pasión de la que quiero seguir aprendiendo y aportando a todo el que requiera de
            mi trabajo.
        </p>
        <p>
            El 9 de noviembre de 2024 finalicé el curso con una nota media de 9.86. Ahora, sigo estudiando
            por mi cuenta cursos de React + typescript y Git para ofrecer mi mejor versión en este mundo.
        </p>
    </div>
 */
