
let saldoInicial = 1000;

function menuCajero(opcion,valor1,valor2) {

    switch(opcion){
        case " saldo ":
            function consultarSaldo(){

                console.log ("---SALDO ACTUAL---");

             console.log( "Disponible: " + "€" + saldoInicial);

            }

            return consultarSaldo();
            break;

        case " ingreso ":
            function realizarIngreso(monto){

                if ( monto > 0 ){

                    saldoInicial = saldoInicial + monto;

                    console.log("EXITO : Se han ingresado " + monto);
                    console.log ("---SALDO ACTUAL---");

                    console.log ( "Disponible :" + saldoInicial);
                }
                else{

                    console.log( "ERROR : Cantidad de ingreso no valida .");
                }

            }
            return realizarIngreso(valor1);
            break;

        case " retiro ":
            function realizarRetiro(monto){

                if (monto > 0 && monto <= saldoInicial){

                    saldoInicial = saldoInicial - monto;

                    console.log("EXITO : Se han retirado " + monto);
                    console.log ("---SALDO ACTUAL---");

                    return "Disponible :" + saldoInicial;
                }

                else{
                    return "ERROR : Fondos insuficientes o monto invalido .";
                }
            }

            return realizarRetiro(valor1);
            break;

        case " prestamo ":
            function calcularPrestamo(monto,cuotas){

                const total = monto + (monto * 0.10);
                const mensualidad = total / cuotas;

                console.log ("---SIMULACION DE PRESTAMO---");
                console.log("Total a pagar: " +  total);

                return "Cuotas mensuales: " + mensualidad;
            }
            return calcularPrestamo(valor1,valor2);
            break;

        case " cambio ":
            function convertirDivisa(euros){

                const cambio = euros * 1.08;
                
                console.log("--- CONVERSOR ---");

                return euros + "€" + " equivalen a " + cambio + "$"
            }
            return convertirDivisa(valor1);
            break;
        default:
            return "Opcion no valida";
            break;
        
    }
}
menuCajero(" saldo ");
menuCajero (" ingreso ", - 200);
console.log(menuCajero (" ingreso ", 300));
console.log(menuCajero (" retiro ", - 10));
console.log(menuCajero (" retiro ", 800));
console.log(menuCajero (" prestamo ", 400 , 10));
console.log(menuCajero (" cambio ", 50));
console.log(menuCajero (" puta "));
