
const readline = require("readline");
const tColores = {ROJO: 0, AZUL: 1, VERDE: 2, DORADO: 3};
let MAX_COLORES_SEQ = [];

function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function main() {
    process.stdin.resume();
    const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
    });

    console.log("¡Bienvenido a Simon dice!");
    const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
    console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);

    await pregunta(rl, "");

    console.clear()

    await comenzarJuego(nombre, rl);

  rl.close();
}

function generarSecuencia ( numeroColoresSec ) {

    let contador = 0;

    while(contador != 12){

        let entero = parseInt(Math.random() * (4-0) + 0);

        let valorColorArray = intToColor(entero);
        let colorFinal = mostrarColor(valorColorArray);
        MAX_COLORES_SEQ.push(colorFinal);


        contador++;

    }

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

function comprobarColor ( secuenciaColores , indice , color ) {

    let x = charToColor(color)
    let z = mostrarColor(x);

    if(z != secuenciaColores[indice - 1]){

        console.log("¡Incorrecto! El color correcto era: " + secuenciaColores[indice - 1]);
        return true;

    }
    else{
        console.log("¡Correcto!");
        return false;
    }
}

function mostrarSecuencia ( secuenciaColores , numero ){

    for(let i = 0 ; i <= numero ; i++){

        console.log("Color " + (i+1) + ": " + secuenciaColores[i]);
    }

}

async function comenzarJuego ( nombre , rl ) {

    const numColores = 4;
    const secuencia = generarSecuencia(numColores);
    let longitudActual = 3;
    let juegoTerminado = false;
    let contadorColores = 1;
    let secuenciasAcertadas = 0;

    while (!juegoTerminado && longitudActual <= secuencia.length) {

        mostrarSecuencia(secuencia, (longitudActual-1));

        console.log("");
        console.log(nombre + " introduce la secuencia de colores (R = Rojo, A = Azul, V = Verde, D = Dorado): ")
        console.log("Cuando lo hayas memorizado pulsa Enter para continuar.");

        await pregunta(rl, "");

        console.clear()

        while (!juegoTerminado && longitudActual >= contadorColores ) {

            let respuesta = await pregunta(rl,"Color " + contadorColores + ": ");

            let correccion = comprobarColor(secuencia, contadorColores, respuesta);

            juegoTerminado = correccion;

            contadorColores++;

        }

        longitudActual++;
        contadorColores = 1;

        if (juegoTerminado) {

            console.log("");
            console.log("---- GAME OVER ----");
            console.log("Secuencias acertadas: " + (secuenciasAcertadas));
            console.log("");

        }
        else if (longitudActual <= secuencia.length) {

            console.log("");
            console.log("¡Has acertado la secuencia! Siguiente ronda...");

            secuenciasAcertadas++;

            await pregunta(rl, "");

            console.clear()

        }
    }

    if (!juegoTerminado) {
    
        console.log("");
        console.log("¡FELICIDADES " + nombre + "! HAS COMPLETADO EL JUEGO CON ÉXITO.");
        console.log("");

    }
}

main().catch(console.error);