//ESTRUCTURAS DE CONTROL

//IF ELSE
const puntaje = 1000;

if(puntaje === 1000){
    console.log("El puntaje es 1000")
}else{
    console.log('No es igual')
}

//ELSE IF
const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta': 
        console.log('Pagaste con tajeta')
        break;
    case 'bitcoin': 
        console.log('Pagaste con bitcoin')
        break;
    case 'cheque': 
        console.log('Pagaste con cheque. Revisaremos los fondos primero')
        break;
    case 'efectivo': 
        console.log('Pagaste con cheque.')
        break;
    default:
        console.log('Aun no has pagado')
        break;
}