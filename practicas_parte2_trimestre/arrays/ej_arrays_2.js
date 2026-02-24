const lecturas = [110 , 135 , -10 , 50 , 210 , 119 , 0, 121 , -5];

//Creamos contadores que incrementaran dependiendo de las condiciones de dentro del for que recorre nuestro array
let multas = 0;

let carcel = 0;

let correctos = 0;

for ( let i = 0; i < lecturas.length; i++){

    if (lecturas[i] >= 121 && lecturas[i] <=200){

        multas++;
    }
    else if(lecturas[i] > 200){

        carcel++;
    }
    else if(lecturas[i] <= 120 && lecturas[i] > 0){

        correctos++;
    }
}

console.log("Multas:" + multas);

console.log("Carcel:" + carcel);

//Si el numero de delitos de carcel es mayor o igual a 3
if(carcel>=3){

    console.log("Carrera ilegal!")  

}

console.log("Correctos:" + correctos);


