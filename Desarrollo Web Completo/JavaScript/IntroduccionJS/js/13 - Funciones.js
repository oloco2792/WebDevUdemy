//Declaracion de Funciones

function sumar(){
    console.log(10 * 10);
}

//Expresion de la funcion

const sumar2 = function(){
    console.log(5 * 5)
}

//Debes colocar el punto y coma cuando llames una expresion de la funcion

sumar2();

//IIFE
//Sirve principalmente para aislar variables del scope global

(function(){
    console.log("Esto tambien es una funcion")
})();

//FUNCIONES CON PARAMETROS Y ARGUMENTOS

function sumar3 (num1, num2){//Lo que va dentro del parentesis se llama parametros...
    console.log(num1 + num2)
}

sumar3(2, 2)//...y estos se llaman argumentos
sumar3(3, 3)
sumar3(47, 26)

//Tambien es posible colocarle valores por default en los parametros
//function sumar3 (num1 = 0, num2 = 0)

//return
//Las variables pueden (y deberian) retornar valores fuera de la funcion

function sumar4(num1, num2){
    return num1 + num2;
}

const resultado = sumar4(2, 2)
console.log(resultado)

//ejemplo del return

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(){
    return 1.15 * total
}

total = agregarCarrito(200);
total = agregarCarrito(200);

console.log(total)

const totalAPagar = calcularImpuesto(total)

console.log(totalAPagar)