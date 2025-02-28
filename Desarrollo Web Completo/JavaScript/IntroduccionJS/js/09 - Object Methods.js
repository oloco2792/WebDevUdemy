"use strict"; 
//JS corre en modo "chill" normalmente, ignorando algunos errores y falta de buenas practicas.
//Con "use strict", puedes hacer que no lo haga, tirandonos un error
//Object Methods
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: "200$",
    estado: true,
}

//Puedes modificar el valor de un const usando los objetos (wow!)
//Para prevenir modificaciones en el objeto, puedes usar

Object.freeze(producto);

//O tambien

Object.seal(producto);

//Ninguno te deja añadir o eleminar atributos del objeto, pero Seal si te deja modificar los ya existentes

console.log(Object.isSealed(producto))

producto.imagen = "imagen.jpg"
console.log(producto);
