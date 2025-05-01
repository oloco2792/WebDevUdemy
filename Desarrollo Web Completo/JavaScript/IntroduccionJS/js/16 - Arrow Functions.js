//ARROW FUNCTION

const sumar = function(num1 = 0, num2 = 0){
    console.log(num1 + num2);
}

sumar(2, 2);

const sumar2 = (num1 = 0, num2 = 0) => console.log(num1 + num2);

sumar(3, 3)

//En JS existen funciones sin nombre.
//Estas variables se pueden rescribir con la sintaxis flecha que es mas facil de leer
//Las 2 funciones de arriba hacen exactamente lo mismo

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

//si el Arrow Function tiene una sola linea de codigo, puedes omitir las llaves
//Si solamente hay un parametro, puede eliminar el parentesis tambien

aprendiendo('JavaScript')

//Los arrow function brillan en los array methods

