//Constantes y variables globales del proyecto
const readline = require("readline");
const tColores = {ROJO: 0, AZUL: 1, VERDE: 2, DORADO: 3, BLANCO: 4, MARRON: 5, NARANJA: 6};
const tModo = {FACIL: 1, DIFICIL: 2};

const MAX_COLORES_FACIL = 4;
const MAX_COLORES_DIFICIL = 7;

let MAX_COLORES_SEQ ;
let secuenciaGeneral = [];


//Funcion pregunta del proyecto
function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}
//Funcion main del proyecto, llama a la función comenzarJuego para empezar a jugar.
async function main() {
    process.stdin.resume();
    const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
    });

    console.log("¡Bienvenido a Simon dice!");
    const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");

    console.log(`Elije una opcion para continuar: `);
    console.log("0: Salir")
    console.log(`1. Jugar en modo sencillo`);
    console.log(`2. Jugar en modo dificil `);

    const modo = await pregunta(rl, "Opcion: ");

    console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);
    
    await pregunta(rl, "");

    console.clear()

    await comenzarJuego(nombre, rl, modo);

  rl.close();
}

//Funcion generarSecuencia, genera una secuencia de colores aleatoria y la devuelve en un array. El parametro que recibe es el número de colores posibles de la secuencia.
function generarSecuencia ( modo, numeroColoresSec ) {

    let contador = 0;

    if(modo == tModo.FACIL){

        numeroColoresSec = MAX_COLORES_FACIL;

        MAX_COLORES_SEQ = 12

        console.log(modo + " " + numeroColoresSec + " " + MAX_COLORES_SEQ);

        while(contador != MAX_COLORES_SEQ){

            let entero = parseInt(Math.random() * (numeroColoresSec-0) + 0);

            let valorColorArray = intToColor(entero);
            let colorFinal = mostrarColor(valorColorArray);
            secuenciaGeneral.push(colorFinal);


            contador++;

        }

        return secuenciaGeneral;

    } 
    else {

        numeroColoresSec = MAX_COLORES_DIFICIL;

        MAX_COLORES_SEQ = 15;

        console.log(modo + " " + numeroColoresSec + " " + MAX_COLORES_SEQ);

        while(contador != MAX_COLORES_SEQ){

            let entero = parseInt(Math.random() * (numeroColoresSec-0) + 0);

            let valorColorArray = intToColor(entero);
            let colorFinal = mostrarColor(valorColorArray);
            secuenciaGeneral.push(colorFinal);


            contador++;

        }
        
        return secuenciaGeneral;

    }
}

//Funcion intToColor, recibe un número entero y devuelve el valor TColores correspondiente al número.
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
        case 4:
            return tColores.BLANCO;
            break;
        case 5:
            return tColores.MARRON;
            break;
        case 6:
            return tColores.NARANJA;
            break;
    }
}


//Funcion mostrarColor, recibe un valor TColores como parametro y devuelve el nombre del color correspondiente por consola.
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
        case tColores.BLANCO:
            return "BLANCO";
            break;
        case tColores.MARRON:
            return "MARRON";
            break;
        case tColores.NARANJA:
            return "NARANJA";
            break;
    }
}

//Funcion charToColor, recibe un caracter como parametro y devuelve el valor TColores correspondiente al caracter. El caracter puede ser mayuscula o minuscula (no filtra que sea un caracter invalido, se asume que ha fallado el color).
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
        case "b":
            return tColores.BLANCO;
            break;
        case "m":
            return tColores.MARRON;
            break;
        case "n":
            return tColores.NARANJA;
            break;
    }
}

//Funcion comprobarColor: recibe la secuencia de colores, la posicion del color a comparar que sirve para comprobar esa misma posicion en la secuencia generada y el color introducido por el usuario. Devuelve true si el color introducido es incorrecto y false si es correcto.
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

//Funcion mostrarSecuencia, recibe la secuencia de colores y el numero de colores a mostrar. Muestra por consola la secuencia de colores hasta el numero indicado (el juego comienza mostrando los tres primeros colores).
function mostrarSecuencia ( secuenciaColores , numero ){

    for(let i = 0 ; i <= numero ; i++){

        console.log("Color " + (i+1) + ": " + secuenciaColores[i]);
    }

}

//Funcion comenzarJuego:es la funcion principal del proyecto. Recibe el nombre del jugador y el objeto readline para interactuar con el usuario. Es la funcion que nos mantiene jugando y la que se encarga de llamar a las demas funciones.
async function comenzarJuego ( nombre , rl , modo ) {

    let secuencia;
    if (modo == tModo.FACIL) {

        secuencia = generarSecuencia(modo, MAX_COLORES_FACIL);

    }
    else if (modo == tModo.DIFICIL) {

        secuencia = generarSecuencia(modo, MAX_COLORES_DIFICIL);

    }

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