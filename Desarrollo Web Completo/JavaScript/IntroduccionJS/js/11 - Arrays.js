const numeros = [10, 20, 30, 40, 50];
console.table(numeros)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'abril')
//console.log(meses)

//LOS ARREGLOS PUEDEN CONTENER MULTITUD DE TIPOS DE DATOS

const arreglo = ["Hola", 10, true, "si", null, {nombre: 'oliver',  edad: 23}, [1, 2, 3, 4]];
/*console.log(arreglo)

//Como acceder a los elementos de un array
console.log(meses[2])

//Como saber la longitud de un array?
console.log(meses.length)

//Como realizar una accion por cada elemento de un array?
meses.forEach(function(mes){
    console.log(mes);
})
*/

//Metodos para los Arrays

/*numeros[5] = 60; //Si intentas modificar un valor que no existe, se añadira al array

console.table(numeros)*/

//Un mejor metodo para modifica un array sin saber su longitud es

//numeros.push(60) //Añade el nuevo valor al final del arreglo y se pueden encadenar (50, 60, 70)

numeros.unshift(-10, -20, -30) //Igual que .push pero al inicio

numeros.pop() //Elimina el Ultimo elemento del array
numeros.shift() //Elimina el primer elemento del array

console.table(numeros)