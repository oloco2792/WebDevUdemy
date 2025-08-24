//CLASES EN JS
//La primera letra del nombre de la clase va en mayusucla

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        
    }

    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}.`
    }
}

const producto = new Producto('Raton Gamer', 400);

console.log(producto)

//HERENCIA

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
}

const libro = new Libro('Yo SOy Dios', 120, '127831872378132');

console.log(libro.formatearProducto());