const salaDeCine = 
    [
    [1 , 1 , 0 , 0 , 0] ,
    [1 , 1 , 1 , 0 , 1] ,
    [0 , 0 , 0 , 1 , 1] ,
    [1 , 1 , 1 , 1 , 1] 
    ];

    let vLibre = 0;

    let encontrado = false;

//Recorremos todos los asientos de las filas de la sala
for (let i = 0; i < salaDeCine.length; i++){

    for (let j = 0; j <= salaDeCine.length; j++){

        if (salaDeCine [i][j] == 0){  //Detecta si el asiento esta libre y si es asi se incrementa el valor de la variable

            vLibre++;

        }
        else{

            vLibre = 0;

        }

        if (vLibre == 3){   //Cuando veamos que el numero de asientos libres consecutivos es 3, la variable booleana es true

            encontrado = true;

        }

        if (encontrado == true){   //Cuando ya sabemos que hay 3 asientos libres, imprimimos en la fila en la que se encuentran y salimos del bucle

            console.log ("Asientos disponibles en la fila: " + i)

            i = salaDeCine.length;

            j = salaDeCine.length;

        }
    }
}

