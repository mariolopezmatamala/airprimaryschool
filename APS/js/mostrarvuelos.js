// Definir datos de vuelos para cada piloto

//Javier Uceda
const vuelosAPS25E = [
    { numero: '01', fecha: '2023-09-13', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '02', fecha: '2023-09-19', origen: 'SPJC', destino: 'SPJC', avion: 'DA62', regla: 'VFR', tiempo: '1H' },
];

//Mario Lopez
const vuelosAPS39R = [
    { numero: '01', fecha: '2023-08-06', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '01:30' },
    { numero: '02', fecha: '2023-08-17', origen: 'SPJC', destino: 'SPJC', avion: 'B738', regla: 'IFR', tiempo: '1H' },
    { numero: '03', fecha: '2023-08-20', origen: 'SPJC', destino: 'SPJC', avion: 'PA34', regla: ' Z ', tiempo: '1H' },
    { numero: '04', fecha: '2023-08-26', origen: 'SPJC', destino: 'SPJC', avion: 'PA34', regla: ' Z ', tiempo: '1H' },
    { numero: '05', fecha: '2023-08-29', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '06', fecha: '2023-09-05', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '07', fecha: '2023-09-13', origen: 'SPJC', destino: 'SPJC', avion: 'PA34', regla: 'IFR', tiempo: '1H' },
    { numero: '08', fecha: '2023-09-18', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '09', fecha: '2023-09-25', origen: 'EDOA', destino: 'LKLN', avion: 'PA34', regla: 'VFR', tiempo: '1H' },

];

//Javier Rodríguez
const vuelosAPS77R = [
    { numero: '01', fecha: '2023-08-06', origen: 'SPJC', destino: 'SPJC', avion: 'DA62', regla: 'VFR', tiempo: '1H' },
    { numero: '02', fecha: '2023-09-12', origen: 'SPJC', destino: 'SPJC', avion: 'DA62', regla: 'VFR', tiempo: '1H' },
];

//Mario Vargas
const vuelosAPS21J = [
    { numero: '01', fecha: '2023-08-06', origen: 'SPJC', destino: 'SPJC', avion: 'DA62', regla: 'VFR', tiempo: '1H' },
    { numero: '02', fecha: '2023-08-17', origen: 'SPJC', destino: 'SPJC', avion: 'DA62', regla: 'VFR', tiempo: '1H' },
    { numero: '03', fecha: '2023-08-25', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '04', fecha: '2023-09-05', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },

];

//Alberto Almeida
const vuelosAPS27C = [
    { numero: '01', fecha: '2023-08-06', origen: 'SPJC', destino: 'SPJC', avion: 'C172', regla: 'VFR', tiempo: '1H' },
    { numero: '02', fecha: '2023-08-20', origen: 'SPJC', destino: 'SPJC', avion: 'A320', regla: 'IFR', tiempo: '1H' },
    { numero: '03', fecha: '2023-09-13', origen: 'SPJC', destino: 'SPJC', avion: 'A320', regla: 'IFR', tiempo: '1H' },
];

// Miguel Mercader
const vuelosAPS31Q = [
    { numero: '01', fecha: '2023-09-13', origen: 'SPJC', destino: 'SPJC', avion: 'A20N', regla: 'IFR', tiempo: '1H' },
    { numero: '02', fecha: '2023-10-01', origen: 'RJAA', destino: 'ZBAA', avion: 'A333', regla: 'IFR', tiempo: '5H' },
    { numero: '03', fecha: '2023-10-01', origen: 'ZBAA', destino: 'ZSPD', avion: 'A333', regla: 'IFR', tiempo: '2H' },
    { numero: '04', fecha: '2023-10-04', origen: 'SLLP', destino: 'SCEL', avion: 'A20N', regla: 'IFR', tiempo: '3H' },
    { numero: '05', fecha: '2023-10-05', origen: 'SCEL', destino: 'SAEZ', avion: 'A320', regla: 'IFR', tiempo: '2H' },
    { numero: '06', fecha: '2023-10-06', origen: 'ZSPD', destino: 'NZCH', avion: 'A339', regla: 'IFR', tiempo: '12H' },
    { numero: '07', fecha: '2023-10-07', origen: 'NZCH', destino: 'NZAA', avion: 'A339', regla: 'IFR', tiempo: '1H' },
    { numero: '08', fecha: '2023-10-07', origen: 'NZAA', destino: 'YBBN', avion: 'A339', regla: 'IFR', tiempo: '5H' },
    { numero: '09', fecha: '2023-10-07', origen: 'YBBN', destino: 'YSSY', avion: 'A339', regla: 'IFR', tiempo: '2H' },
    { numero: '10', fecha: '2023-10-07', origen: 'YSSY', destino: 'YMML', avion: 'A339', regla: 'IFR', tiempo: '2H' },
    { numero: '11', fecha: '2023-10-07', origen: 'YMML', destino: 'YPAD', avion: 'A333', regla: 'IFR', tiempo: '2H' },
    { numero: '12', fecha: '2023-10-11', origen: 'YPAD', destino: 'YPPH', avion: 'A333', regla: 'IFR', tiempo: '4H' },
    { numero: '13', fecha: '2023-10-11', origen: 'YPPH', destino: 'FACT', avion: 'A333', regla: 'IFR', tiempo: '12H' },
    { numero: '14', fecha: '2023-10-12', origen: 'FACT', destino: 'FAOR', avion: 'A333', regla: 'IFR', tiempo: '2H' },
    
];

// Junior Ipanaque
const vuelosAPS05L = [
    { numero: '01', fecha: '2023-09-29', origen: 'SPCL', destino: 'SPJC', avion: 'C700', regla: 'IFR', tiempo: '2H' },
    { numero: '02', fecha: '2023-09-30', origen: 'SPAY', destino: 'SPCL', avion: 'C414', regla: 'VFR', tiempo: '1H' },
];

// Joaquin Ampuero
const vuelosAPS55D = [
    { numero: '01', fecha: '2023-10-12', origen: 'VIDP', destino: 'VTBS', avion: 'B788', regla: 'IFR', tiempo: '4H' },
];

// Función para crear un div de estilo personalizado
function createStyledDiv(content, className) {
    const div = document.createElement('div');
    div.className = className;
    const label = document.createElement('label');
    label.className = 'tablaVuelos-letra-yellow';
    label.textContent = content;
    const mask = document.createElement('div');
    mask.className = 'tablaVuelos-mask';
    div.appendChild(label);
    div.appendChild(mask);
    return div;
}

// Función para mostrar los vuelos de un piloto
function mostrarVuelo(callsign) {
    // Mostrar el indicativo de llamada en el nuevo div
    const callsignDiv = document.getElementById('callsignDiv');
    callsignDiv.textContent = callsign;


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
        case 'APS31Q':
            vuelos = vuelosAPS31Q;
            break;
        case 'APS05L':
            vuelos = vuelosAPS05L;
            break;
        case 'APS55D':
            vuelos = vuelosAPS55D;
            break;
        default:
            // No se encontraron vuelos para el callsign
            return;
    }

    // Crear tabla de vuelos
    const tablaVuelos = document.createElement('div');
    tablaVuelos.classList.add('tablaVuelos'); // Clase correspondiente al contenedor de la tabla

    // Crear primera fila (encabezados)
    const headerRow = document.createElement('div');
    headerRow.classList.add('tablaVuelos-row'); // Clase correspondiente a las filas de encabezados
    const headerContent = `
    <div id="tablaVuelos" class="tablaVuelos-Header" >
    <div class="tablaVuelos-row">
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">N
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">º
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">F
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">E
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">C
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">H
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">A
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-dep1">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-dep2">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-arr1">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-arr2">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-av1">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-av2">
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">R
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">E
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">G
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">L
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
        <label class="tablaVuelos-letra-yellow">A
        </label>
        <div class="tablaVuelos-mask"></div>
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-letter">
      </div>
      <div class="tablaVuelos-rel1">
      </div>
      <div class="tablaVuelos-rel2">
      </div>
      <div class="tablaVuelos-letter">
      </div>

    </div>
    </div>`;
    headerRow.innerHTML = headerContent; // Tomar el contenido del encabezado del HTML y agregarlo a la fila
    tablaVuelos.appendChild(headerRow);

    // Crear filas de vuelos
    vuelos.forEach((vuelo) => {
        const vueloRow = document.createElement('div');
        vueloRow.classList.add('tablaVuelos-row'); // Clase correspondiente a las filas de vuelos

        // Configurar el contenido de cada div según el vuelo actual
        for (const caracter of vuelo.numero) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (5 - vuelo.numero.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.fecha) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (12 - vuelo.fecha.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.origen) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (6 - vuelo.origen.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.destino) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (6 - vuelo.destino.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.avion) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (6 - vuelo.avion.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.regla) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }
        for (let i = 0; i < (5 - vuelo.regla.length); i++) {
            vueloRow.appendChild(createStyledDiv(' ', 'tablaVuelos-letter'));
        }

        for (const caracter of vuelo.tiempo) {
            vueloRow.appendChild(createStyledDiv(caracter, 'tablaVuelos-letter'));
        }

        tablaVuelos.appendChild(vueloRow); // Agregar la fila de vuelo a la tabla
    });

    // Reemplazar el contenido actual de la tabla con la nueva tabla generada
    const tablaVuelosContainer = document.getElementById('tablaVuelos');
    tablaVuelosContainer.innerHTML = ''; // Limpiar el contenido actual
    tablaVuelosContainer.appendChild(tablaVuelos); // Agregar la nueva tabla
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

    const participacionesAPS31Q = vuelosAPS31Q.length;
    document.getElementById('participacionesAPS31Q').textContent = participacionesAPS31Q;

    const participacionesAPS05L = vuelosAPS05L.length;
    document.getElementById('participacionesAPS05L').textContent = participacionesAPS05L;
    
    const participacionesAPS55D = vuelosAPS55D.length;
    document.getElementById('participacionesAPS55D').textContent = participacionesAPS55D;
});

document.addEventListener('DOMContentLoaded', () => {
    const vuelosTotales = [
        ...vuelosAPS25E,
        ...vuelosAPS39R,
        ...vuelosAPS77R,
        ...vuelosAPS21J,
        ...vuelosAPS27C,
        ...vuelosAPS31Q,
        ...vuelosAPS05L,
        ...vuelosAPS55D
    ];

    const totalParticipaciones = vuelosTotales.length;
    document.getElementById('totalParticipaciones').textContent = totalParticipaciones;
});

document.addEventListener("DOMContentLoaded", function () {
    const vuelosTotales = [
        ...vuelosAPS25E,
        ...vuelosAPS39R,
        ...vuelosAPS77R,
        ...vuelosAPS21J,
        ...vuelosAPS27C,
        ...vuelosAPS31Q,
        ...vuelosAPS05L,
        ...vuelosAPS55D
    ];
    const h4Elements = document.querySelectorAll(".counter-p");

    h4Elements.forEach((h4) => {
        const targetNumber = parseInt(h4.innerText);
        let currentNumber = 0;

        const interval = setInterval(() => {
            h4.innerText = currentNumber;
            currentNumber++;

            if (currentNumber > vuelosTotales.length) {
                clearInterval(interval);
            }
        }, 200);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const h4Elements = document.querySelectorAll(".counter");

    h4Elements.forEach((h4) => {
        const targetNumber = parseInt(h4.innerText);
        let currentNumber = 0;

        const interval = setInterval(() => {
            h4.innerText = currentNumber;
            currentNumber++;

            if (currentNumber > targetNumber) {
                clearInterval(interval);
            }
        }, 200);
    });
});



