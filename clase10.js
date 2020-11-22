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

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){
        console.log('Ingreniero')
    }

    if(persona.cocinera){
        console.log('Cocinera')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.bajista){
        console.log('Bajista')
    }
}

imprimirProfesion(gaby)

//RETO:
//Saber si soy mayor de edad
function impresionSiEsMayoDeEdad(persona){
    if(persona.edad >= 18){
        console.log('Es mayor de edad.')
    }else{
        console.log('Es menor de edad')
    }
}
impresionSiEsMayoDeEdad(gaby)