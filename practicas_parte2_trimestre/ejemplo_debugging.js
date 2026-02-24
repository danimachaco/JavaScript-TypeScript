const s = function(x,z){
    return x * z;
}
console.log(s(4,10));
    
const hazRuido = function(){
    console.log("Pling");
}
hazRuido();


const redondeo = function(n,j){
    let resto = n % j;
    return n - resto + (resto < j / 2 ? 0 : j);
}
console.log(redondeo(50,13));