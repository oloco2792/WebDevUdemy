//OBJECT CONTRUCTOR Y OBJECT LITERAL
//Prgramación Orientada a Objetos :D

//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto("Monitor de 20'", 800);

console.log(producto2)

//PROTOTYPE

//Algo como esto es ineficiente en caso de que sexistan multiples funciones similares

/*
function formatearProducto(producto){
    return `El producto ${producto.nombre} tienen un precion de ${producto.precio}`
}

console.log(formatearProducto(producto2))
*/

//Para ello existe Prototype.
//Prototype Permite crear funciones que solo se utilizan en un objeto en especifco

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tienen un precio de ${this.precio}`
}

console.log((producto2))