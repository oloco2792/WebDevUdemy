//METODOS DE PROPIEDADES
//Son funciones con sitaxis de metodo
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion N°${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion N°${id}`)
}

reproductor.crearPlaylist = function(nombre){
    console.log(`Creando la playlist '${nombre}'`)
}

reproductor.reproducir(3840)
reproductor.pausar()

reproductor.borrarCancion(636)
reproductor.crearPlaylist("Rock Suave")