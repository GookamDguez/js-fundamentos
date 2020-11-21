var gaby = {
    //clave: valor
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21
}

function imprimirNameMayusc(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
imprimirNameMayusc(gaby)

//RETO
function RetoimprimirNameMayusc(persona){
    //var nombre = persona.nombre
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre.toUpperCase()}  y tengo ${edad} años`)
}

RetoimprimirNameMayusc(gaby)