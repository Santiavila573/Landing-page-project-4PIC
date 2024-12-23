const api = "https://localhost:7253";

async function obtenerData(endpoint) {
    try {
        const response = await fetch(`${api}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

async function fetchData() {
    let categorie = "Apibodega.Backend";
    const data = await obtenerData(categorie);
    console.log(data);
}

fetchData();
