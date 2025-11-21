export const fectData = async (url) => {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let data = await response.json();
    } catch (error) {
        console.error("Error al obtener los datos: ", error);
    }
};
