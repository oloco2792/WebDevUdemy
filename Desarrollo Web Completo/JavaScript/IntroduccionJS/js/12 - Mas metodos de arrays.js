const meses = ['Enero', 'Febrero', 'Marzo', 'abril'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//forEach: un bucle que se ejecutara por cada uno de los elementos de un array

meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo si existe")
    }
});

// Includes: Una alternativa muy buena para forEach. Este devuelve un valor booleano
// Nota: no es recomendado para arrays que sean objetos


const resultado = meses.includes("Marzo");
console.log(resultado)