// CLASSES

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nomnbre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto = new Producto();

const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('Laptop', 300);

//HERENCIA
//AL añadir extends y la otra clase, esta clase heredara el constructor y los metodos de la otra clase
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        //Al usar super puedes usar los valores del constructor padre
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()}Y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript: La Revolucion', 120, '213123123133489593')

console.log(libro.formatearProducto() )
console.log(producto2.formatearProducto() )
