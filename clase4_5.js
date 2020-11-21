var nombre = 'Gaby', edad = 21

function imprimirEdad(n,e){
    console.log( `${n} tiene ${e}`)
}

imprimirEdad("yo",22)

// ALCANCE DE LAS FUNCIONES
function imprimirNameMayusc(name){
    name = name.toUpperCase()
    console.log(name)
}

//Es preferible usar los parametros o var locales
//a usar las variables globales.
imprimirNameMayusc(nombre)