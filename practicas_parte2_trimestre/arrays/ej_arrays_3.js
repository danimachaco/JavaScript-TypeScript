let inventario = [" Pocion ", " Espada Rota ", " Pocion ", " Basura ", " Escudo ", " Pocion ", " Basura ", " Moneda "];

let ipociones = [];

let ifinal = [];

let pociones = 0;

//Recorremos el array y eliminamos los elementos que sean Espada Rota y basura
for ( let i = 0; i < inventario.length; i++){

    if (inventario[i] != " Basura " && inventario[i] != " Espada Rota "){


        //Detectamos si el elemento es Pocion y si no hay ninguna en el array la llamamos Gran Pocion y lo añadimos a nuestro array final, cuando vengan mas elemntos Pocion no se añadiran al array
        if(inventario[i] != " Pocion "){
    
            ipociones.push(inventario[i]);
                     
        }
        else if (inventario[i] == " Pocion "){

            ipociones.push(inventario[i]);

            pociones++;

        }
    }
}

if (pociones > 1 ){

    ifinal.push(" Gran Pocion ");

    for (let x = 0; x < ipociones.length;x++){

        if (ipociones[x] != " Pocion "){

            ifinal.push(ipociones[x]);

        }
    }


}
console.log(ifinal);

