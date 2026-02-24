const fichajes = [8 , 9 , -2 , 10 , 25 , 14 , 8 , 17 , -5, 23 , 100];

let fichajesValidos= [];

//Añadimos los valores correctos al nuevo array
for (let i = 0 ; i < fichajes.length ; i++){

    if (fichajes[i] >= 0 && fichajes[i] <=24){
        
        fichajesValidos.push(fichajes[i]);

    }
}

console.log(fichajes);

console.log(fichajesValidos);


//Recorremos el array para sumar todos los elementos del array y luego hacer la media de horas
let suma = 0;

for (let j = 0; j < fichajesValidos.length; j++){

    suma = suma + fichajesValidos[j];

}

let media = suma/fichajesValidos.length;


console.log( "La hora media de fichaje es: " + media.toFixed(2));



