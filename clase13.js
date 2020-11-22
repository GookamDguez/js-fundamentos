//Ejercicio: Cuanto sube o baja en un año
var gaby = {
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21,
    peso: 42
}
const INCREMENTO_PESO = 0.2 //son gramos
const DIAS_DEL_ANNIO = 365

console.log(`Al inicio del año ${gaby.nombre} pesa ${gaby.peso}kg`)

//la flecha es como el return
const aumentaDePeso = persona =>  persona.peso += INCREMENTO_PESO
const adelagazar = persona => persona.peso -= INCREMENTO_PESO


for(var i = 1; i <= DIAS_DEL_ANNIO; i++){
    var random = Math.random()

    if(random < 0.25){
        aumentaDePeso(gaby)
    }else if(random < 0.5){
        adelagazar(gaby)
    }
}

console.log(`Al final del año ${gaby.nombre} pesa ${gaby.peso.toFixed(1)}kg`)
