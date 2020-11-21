var gaby = {
    //clave: valor
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21
}

function imprimirNameMayusc(name){
    name = name.toUpperCase()
    console.log(name)
}

imprimirNameMayusc(gaby.nombre)

// otro ejemplo, solo mandando el OBJETO
function imprimirNameMayusc2(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirNameMayusc2(gaby)

// otra version reducida con el objeto
function imprimirNameMayusc3(persona){
    console.log(persona.nombre.toUpperCase())
}
imprimirNameMayusc3(gaby)

//Version mejorada!
//que viene en las nuevas versiones de js
function imprimirNameMayusc4( { nombre } ){
    console.log(nombre.toUpperCase())
}
imprimirNameMayusc3(gaby)
//otra forma de llamarlos
imprimirNameMayusc4({ nombre: 'Henry'})
//sino es el atributo que el espera dará error como el ejemplo de abajo
//imprimirNameMayusc4({ apellido: 'Henry'}) X