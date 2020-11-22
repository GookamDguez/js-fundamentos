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

//Expresión --> Expresiva --> anónimas
//const esMayorEdad = function(persona){
//    return persona.edad >= MAYORIA_DE_EDAD
//}


// ARROW FUNCTION
//se cambio la palabra function por un =>
// return y llaves
//const esMayorEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD

//Desestructurar el parametro 
//la flecha es como el return
const esMayorEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function impresionSiEsMayoDeEdad2(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
impresionSiEsMayoDeEdad2(gaby)

function permitirAcceso(persona){
    return !esMayorEdad(persona) ? console.log(`${persona.edad} ACCESO DENEGADO`) 
                                : console.log(`${persona.edad} ACCESO CONCEDIDO`)
}
permitirAcceso(gaby)
permitirAcceso(henry)

//RETO
// function esMenorDeEdad en arrow function :v
//la flecha es como el return
const esMenorDeEdad = ({nombre, edad}) => !esMayorEdad({edad}) ? console.log(nombre +' eres MENOR de edad')
                                                : console.log(nombre + ' eres MAYOR de edad')

esMenorDeEdad(henry)
esMenorDeEdad(gaby)

//numero aleatorio
const numRandom = (numMax,numMin) => Math.round(Math.random()*(numMax-numMin)+numMin)
console.log( numRandom(10,1) ) // numero aleatorio ente 10 y 1