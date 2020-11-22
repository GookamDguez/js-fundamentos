// El nutricionista nos dijo que adelgazaramos

var gaby = {
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21,
    peso: 75
}

const INCREMENTO_PESO = 0.3 //son 300 gramos
const DIAS_DEL_ANNIO = 365

console.log(`Al inicio del año ${gaby.nombre} pesa ${gaby.peso}kg`)

//la flecha es como el return
const aumentaDePeso = persona =>  persona.peso += INCREMENTO_PESO
const adelagazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = gaby.peso - 3
var dias = 0

while(gaby.peso > META){
    //debugger
    if( comeMucho() ){
       aumentaDePeso(gaby)
    }
    if( realizaDeporte() ){
        adelagazar(gaby)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${gaby.nombre} adelgazo 3kg`)
