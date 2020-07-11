const cantidadAN = document.getElementById("cantidadAN");
const rangoAN = document.getElementById("rangoAN");
const cantidadR1 = document.getElementById("nanr1");
const oroR1 = document.getElementById("oanr1");
const btn_calcular = document.getElementById("calcularAN");

btn_calcular.addEventListener('click', (ev) => {
    let cantidad = parseInt(cantidadAN.value, 10);
    let rango = parseInt(rangoAN.value, 10);

    let n = calcularAN(cantidad, rango);
    let o = calcularOro(cantidad, rango, n);
    /*
    console.log(rango);
    console.log(cantidad);
    console.log(n);
    console.log(o);*/
    cantidadR1.innerHTML = `${new Intl.NumberFormat().format(n)}`;
    oroR1.innerHTML = `${new Intl.NumberFormat().format(o)}`;

});

function calcularAN(cantidad, rango) {
    let n = 0;

    switch (rango) {
        case 1:
            n = 0;
            break;
        case 2:
            n = 50 * Math.pow(2, 0) * cantidad;
            break;
        case 3:
            n = 50 * Math.pow(2, 1) * cantidad;
            break;
        case 4:
            n = 50 * Math.pow(2, 2) * cantidad;
            break;
        case 5:
            n = 50 * Math.pow(2, 3) * cantidad;
            break;
        case 6:
            n = 50 * Math.pow(2, 4) * cantidad;
            break;
        default:
            n = 0;
            break;
    }
    return n;
}

function calcularOro(cantidad, rango, cal) {
    let n = 0;
    let c = cal / 50;

    switch (rango) {
        case 1:
            n = 0;
            break;
        case 2:
            n = 125000 * cantidad;
            break;
        case 3:
            n = c * 125000 + 187500 * cantidad;
            break;
        case 4:
            n = c * 125000 + (c/2) * 187500 + 250000 * cantidad;
            break;
        case 5:
            n = c * 125000 + (c/2) * 187500 + (c/4) * 250000 + 312500 * cantidad;
            break;
        case 6:
            //n = 5500000 * cantidad;
            n = c * 125000 + (c/2) * 187500 + (c/4) * 250000 + (c/8) * 312500 + 375000 * cantidad;
            break;
        default:
            n = 0;
            break;
    }
    return n;
}