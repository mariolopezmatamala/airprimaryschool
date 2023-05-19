// Definir datos de vuelos para cada piloto
const vuelosAPS25E = [
    { numero: '1', fecha: '2023-01-01', origen: 'AER', destino: 'BOS', avion: 'B737', reglas: 'VFR', duracion: '2 horas' },
    { numero: '2', fecha: '2023-02-02', origen: 'JFK', destino: 'LAX', avion: 'A320', reglas: 'IFR', duracion: '4 horas' },
    { numero: '3', fecha: '2023-03-03', origen: 'ORD', destino: 'DFW', avion: 'B747', reglas: 'VFR', duracion: '3 horas' }
];

const vuelosAPS39R = [
    { numero: '1', fecha: '2023-04-04', origen: 'LHR', destino: 'CDG', avion: 'A380', reglas: 'VFR', duracion: '2 horas' },
    { numero: '2', fecha: '2023-05-05', origen: 'SFO', destino: 'SEA', avion: 'B787', reglas: 'IFR', duracion: '2.5 horas' }
];

const vuelosAPS77R = [
    { numero: '1', fecha: '2023-06-06', origen: 'HND', destino: 'ICN', avion: 'B777', reglas: 'IFR', duracion: '1.5 horas' }
];

const vuelosAPS21J = [];

const vuelosAPS27C = [
    { numero: '1', fecha: '2023-07-07', origen: 'LAX', destino: 'LAS', avion: 'B737', reglas: 'VFR', duracion: '1 hour' },
    { numero: '2', fecha: '2023-08-08', origen: 'MIA', destino: 'ATL', avion: 'A320', reglas: 'IFR', duracion: '2 hours' }
];

// Función para mostrar los vuelos de un piloto
function mostrarVuelo(callsign) {
    // Obtener los vuelos correspondientes al callsign
    let vuelos = [];

    switch (callsign) {
        case 'APS25E':
            vuelos = vuelosAPS25E;
            break;
        case 'APS39R':
            vuelos = vuelosAPS39R;
            break;
        case 'APS77R':
            vuelos = vuelosAPS77R;
            break;
        case 'APS21J':
            vuelos = vuelosAPS21J;
            break;
        case 'APS27C':
            vuelos = vuelosAPS27C;
            break;
        default:
            // No se encontraron vuelos para el callsign
            return;
    }

    // Crear tabla de vuelos
    const tabla = document.createElement('table');
    tabla.classList.add('tabla-vuelos');

    // Crear encabezado de la tabla
    const thead = document.createElement('thead');
    const encabezado = document.createElement('tr');
    const encabezados = ['Número', 'Fecha', 'Origen', 'Destino', 'Avión', 'Reglas de vuelo', 'Duración'];

    encabezados.forEach((encabezadoTexto) => {
        const th = document.createElement('th');
        th.textContent = encabezadoTexto;
        encabezado.appendChild(th);
    });

    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    // Crear filas de vuelos
    const tbody = document.createElement('tbody');

    vuelos.forEach((vuelo) => {
        const fila = document.createElement('tr');

        Object.values(vuelo).forEach((valor) => {
            const celda = document.createElement('td');
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);

    // Mostrar tabla de vuelos
    const tablaVuelos = document.getElementById('tablaVuelos');
    tablaVuelos.innerHTML = '';
    tablaVuelos.appendChild(tabla);
}

// Calcular y mostrar el total de participaciones para cada piloto
document.addEventListener('DOMContentLoaded', () => {
    const participacionesAPS25E = vuelosAPS25E.length;
    document.getElementById('participacionesAPS25E').textContent = participacionesAPS25E;

    const participacionesAPS39R = vuelosAPS39R.length;
    document.getElementById('participacionesAPS39R').textContent = participacionesAPS39R;

    const participacionesAPS77R = vuelosAPS77R.length;
    document.getElementById('participacionesAPS77R').textContent = participacionesAPS77R;

    const participacionesAPS21J = vuelosAPS21J.length;
    document.getElementById('participacionesAPS21J').textContent = participacionesAPS21J;

    const participacionesAPS27C = vuelosAPS27C.length;
    document.getElementById('participacionesAPS27C').textContent = participacionesAPS27C;
});