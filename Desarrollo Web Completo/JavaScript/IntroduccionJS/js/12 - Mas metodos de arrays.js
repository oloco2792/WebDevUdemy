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

let resultado = meses.includes("Marzo");

//some: Este si se puede usar para una arreglo de objeto
//Retorna true si se cumple la condicion de dentro
resultado = carrito.some(function(producto){
    return producto.nombre === "Celular";
})

//reduce: Aqui fue usado para sumar el toal de todos los productos

resultado = carrito.reduce(function(total, producto){
    return total = producto.precio;
}, 0)

//Existe un concepto llamado "Arrow Functions"
//Hace exactamente lo mismo pero es mucho mas corto
//resultado = carrito.reduce((total, producto) => total = producto.precio, 0)

//filter: Util para filtrar resultados (duh)
//Mostrara todos los resultados dependiendo de la operacion

//Muestra todos los prodcutos con un precio mayor a 400
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
})

//MUestra todos los objetos con el nombre "Celular"
resultado = carrito.filter(function(producto){
    return producto.nombre == "Celular";
})

console.log(resultado)