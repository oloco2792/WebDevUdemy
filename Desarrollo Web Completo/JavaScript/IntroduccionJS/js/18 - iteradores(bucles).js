//for loops

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//while loop

let f = 11;
while(f <= 20){
   console.log(f)
   f++
}

//Do while loop
//NOTA: El Do While ejecuta el codigo al menos una vez, independientemente de la condicion

let g = 21;

do{
    console.log(g);

    g++
}while(g <= 30)

//forEach
//Para iterar los arrays

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

carrito.forEach( (producto) => console.log(producto.nombre))

//map
//Puede hacer exactamente lo mismo que forEach
//La diferencia es que forEach no retornna ningun valor
//Mientras que map si retorna un nuevo array
//Usa map cuando quieras guardar un nuevo array con los datos
carrito.map( (producto) => console.log(producto.nombre))