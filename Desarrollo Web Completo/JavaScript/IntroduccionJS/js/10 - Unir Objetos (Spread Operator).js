//UNIR DOS OBJETOS CON SPREAD OPERATOR

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: "200$",
    estado: true,
}

const medidas = {
    peso: '2kg',
    medida: '1m',
}

//Usando esta sintaxis, puede unir dos objetos pero sin modifcar su contenido

const nuevoProducto = {
    ...producto, ...medidas
}

console.log(producto)
console.log(nuevoProducto)