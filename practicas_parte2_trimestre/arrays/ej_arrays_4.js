
const alimentos = [" Leche ", " Pollo ", " Yogur ", " Queso ", " Manzana "];

const caducidad = [2 , -1, 0, 15 , 5];

//Creamos los tres arrays nuevos
let tirarLaBasura = [];

let comerHoy = [];

let guardar = [];


//Recorremos los dos arrays a la vez y separamos los arrays nuevos por condiciones
for (let i = 0; i < alimentos.length; i++){
    for (let j = 0; j < caducidad.length; j++){

        if(caducidad[j] < 0){

            tirarLaBasura.push(alimentos[i]);

        }
        else if (caducidad[j] == 0){

            comerHoy.push(alimentos[i]);

        }
        else {

            guardar.push(alimentos[i]);

        }

        //Seguimos sumando i para que los alimentos tambien cambien
        i++
    }
}

console.log(tirarLaBasura);
console.log(comerHoy);
console.log(guardar);