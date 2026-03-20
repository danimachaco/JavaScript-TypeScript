const tColores = {ROJO: 0, AZUL: 1, VERDE: 2, DORADO: 3};
let MAX_COLORES_SEQ = [];


function generarSecuencia ( numeropollas ) {

    let contador = 0;

    while(contador != 12){

        let entero = parseInt(Math.random()*numeropollas);

        let valorColorArray = intToColor(entero);
        let colorFinal = mostrarColor(valorColorArray);
        MAX_COLORES_SEQ.push(colorFinal);


        contador++;

    }

    console.log(MAX_COLORES_SEQ)
    return MAX_COLORES_SEQ;
}


function intToColor ( numero ) {

    switch(numero){

        case 0:
            return tColores.ROJO;
            break;
        case 1:
            return tColores.AZUL;
            break;
        case 2:
            return tColores.VERDE;
            break;
        case 3:
            return tColores.DORADO;
            break;
    }
}

function mostrarColor(valorTColor){

    switch(valorTColor){
        case tColores.ROJO: 
            return "ROJO"
            break;
        case tColores.AZUL:
            return "AZUL";
            break;
        case tColores.VERDE:
            return "VERDE";
            break;
        case tColores.DORADO:
            return "DORADO";
            break;
    }
}

function comprobarColor ( secuenciaColores , indice , color ) {


    for(indice ; indice < secuenciaColores.length;indice++){

        let x = charToColor(color)
        let y = intToColor(x);
        let z = mostrarColor(y);

        if(z == secuenciaColores[indice]){

            console.log("bien")

        }
    }
}

function charToColor ( valorToColor ){ 

    let l = valorToColor.toLowerCase()

    switch(l){

        case "r": 
            return tColores.ROJO;
            break;
        case "a": 
            return tColores.AZUL;
            break;
        case "v": 
            return tColores.VERDE;
            break;
        case "d": 
            return tColores.DORADO;
            break;
    }
}

comprobarColor(generarSecuencia(4),0,"a");

// const readline = require("readline");

// function pregunta(rl, texto) {
//   return new Promise((resolve) => {
//     rl.question(texto, resolve);
//   });
// }

// async function main() {
//   process.stdin.resume();
//   const rl = readline.createInterface({
//     input:  process.stdin,
//     output: process.stdout,
//   });

//   await pregunta(rl, "");
//   await comenzarJuego(nombre, rl);

//   rl.close();
// }
// console.log("¡Bienvenido a Simon dice!");
// const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
// console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);

// pregunta(readline,"cual es tu nombre")


// buscar como hacer el mathRandom con un intervalo