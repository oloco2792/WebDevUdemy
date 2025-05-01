//this
//Si intentases referirte a una propiedad desde una funcion dentro del mismo objeto, no podrias ya que la funcion buscaria dentro del objeto
//Para eso existe el metodo this. Sirve para hacer referencia a las propiedades dentro del objeto

//NOTA: Al usar this, no puedes usar una arrow function ya que esta buscara fuera del objeto(en la ventana global)
const reservacion = {
    nombre: 'Oliver',
    apellido: 'Castillo',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

console.log(reservacion.informacion())