var gaby = {
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21,
    ingeniero: true,
    cocinera: true,
    cantante: false,
    dj: false,
    bajista: false
}

var henry = {
    nombre: 'Henry',
    edad: 15
}

const MAYORIA_DE_EDAD = 18

function impresionSiEsMayoDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

impresionSiEsMayoDeEdad(gaby)
impresionSiEsMayoDeEdad(henry)

// --- otra forma

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function impresionSiEsMayoDeEdad2(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
impresionSiEsMayoDeEdad2(gaby)
impresionSiEsMayoDeEdad2(henry)