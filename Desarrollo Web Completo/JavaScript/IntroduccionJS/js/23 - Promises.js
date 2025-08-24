const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //El Promise se cumple
    }else{
        reject('No se pudo iniciar sesion'); // El promise nos e cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//El los Promises existen 3 valores
//Pending: No se pha cumplido pero tampoco se ha rechazado
//Fufilled: Ya se cumplio
//Rejected: Se ha rechzado o no se pudo cumplir