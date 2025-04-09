//Variables

/* Formas de declarar variables
var: Metodo antiguo que ya no se usa
let: Permite declarar VARIABLES
const: Permite declarar CONSTANTES
*/

// No puedes tener el mismo nombre para varias variables

var producto = "Audifonos Gamer"; //Crear variable y asignar valor

//Se pueden declarar variables sin contenido

var disponibilidad

//Los punto y coma ; no son del todo importantes en JS, a diferencia de otros lenguajes
//Tampoco tienes declarar que tipo de valor tiene una variable (string, booleano, etc)

producto = true;
disponibilidad = 2;

//Puedes crear multiples variables con una sola 'llave'

var producto1 = 'PC',
    disponible1 = true,
    categoria = 'Computadoras';

//Formas de nombrar variables
var nombre_producto = 'Monitor HD'; //underscore
var nombreProducto = 'Monitor HD'; //camelCase (el propio)
var NombreProducto = 'Monitor HD'; //Pascal Case
var nombreproducto = 'Monitor HD'; //minusculo (el sencillito, bastante meh)

//TODAS ESAS VARIABLES SE PUEDEN DECLARAR CON let EN LUGAR DE var

//El const se utiliza para los valores que no se pueden modificar

const nombre = "Carlos";

//Diferencias con let/var: El const SIEMPRE debe tener un valor. No puede estar vacia