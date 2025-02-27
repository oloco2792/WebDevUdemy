// Una de las funciones mas utiles que hay en JS es Math. Hay muchas mas como esta :)

let resultado;

//Algunas propiedades de Math()
resultado = Math.PI; // Como lloraba el Chavo del 8
resultado = Math.random(); //Genera un numero aleatorio entre 0 y 1

resultado = Math.round(2.2); //Redondea normal
resultado = Math.ceil (2.2); //Redondea siempre pa arriba
resultado = Math.floor(2.9); // Redondea siempre pa abajo
resultado = Math.sqrt(144); //Para la raz cuadrada
resultado = Math.abs(-60); //Devuelve el valor absoluto en numero
resultado = Math.min(3, 5, 8, 16) //Devuelve el numero menor
resultado = Math.max(3, 5, 8, 16) //Devuelve el numero mayor
    /*Truco Para sacar numero mas alla de 1*/
    resultado = Math.floor(Math.random() * 30);

console.log(resultado);