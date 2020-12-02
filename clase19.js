var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]
//FILTER: devuelve un nuevo array, no modifica el que tenia

//version anterior:
/*const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}*/

//usar este, para ya no poner el return {} y solo usar parentesis
const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
})

//MAP: devuelve un nuevo array y modificara los elementos
//pasar de metros a centimetros
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)