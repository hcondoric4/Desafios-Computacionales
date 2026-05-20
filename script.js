//Ejercicio 1: Ley de Enfriamiento
function calcularCalor() {
   
    const t0 = Number(document.getElementById('t0').value);
    const ts = Number(document.getElementById('ts').value);
    const k = Number(document.getElementById('k').value);
    const t = Number(document.getElementById('t').value);
    
    
    const tempFinal = ts + (t0 - ts) * Math.exp(-k * t);
    
    const contenedor = document.getElementById('res-calor');
    contenedor.innerText = "Temperatura Final: " + Math.round(tempFinal);
    contenedor.className = "resultado resultado-activo"; 
}

//Ejercicio 2: Combinaciones

function factorial(n) {
    let f = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
        f *= i;
    }
    return f;
}

function calcularCombinaciones() {
    
    const n1 = Number(document.getElementById('n1').value);
    const r1 = Number(document.getElementById('r1').value);
    const n2 = Number(document.getElementById('n2').value);
    const r2 = Number(document.getElementById('r2').value);
    const contenedor = document.getElementById('res-comb');

   
    if (r1 > n1 || r2 > n2 || n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        contenedor.innerText = "Error: 'r' no puede ser mayor que 'n' ni usar negativos.";
        contenedor.className = "resultado resultado-error";
        return;
    }

    
    const c1 = factorial(n1) / (factorial(r1) * factorial(n1 - r1));
    const c2 = factorial(n2) / (factorial(r2) * factorial(n2 - r2));
    const total = c1 * c2;

    
    contenedor.innerText = "Total combinaciones: " + total.toLocaleString('es-ES');
    contenedor.className = "resultado resultado-activo"; 
}