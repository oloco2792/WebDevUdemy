/*const nombreProducto = "Monitor de 20 pulgadas";
const precio = "200$";
const estado = "No Disponible";*/

//Puedes usar un objetos para crear "plantillas" (Aunque eso ya lo sabes)
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: "200$",
    estado: true,
}

//Sintaxis de Punto
//Sirve para acceder a las distintas propiedades del producto
    /*console.log(producto.nombreProducto);
    console.log(producto.precio);
    console.log(producto.estado);*/

//Otra forma (menos comun) de acceder alas propiedades de un objeto es
    //console.log(producto['precio'])

//COMO MODIFICAR PRODUCTOS
//Para agregar propiedades
    //producto.imagen = "imagen.jpg"

//Para eliminar propiedades
    //delete producto.estado;

//DESTRUCTURING OBJETOS

//forma anterior
/*const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto)
console.log(nombreProducto);*/

//forma actual(Destructuring)
//Crea la variable y extrae el valor de manera mas rapida
const {precio, nombreProducto} = producto; //La variable recibira el mismo nombre de la propiedad

console.log(precio);
console.log(nombreProducto);
