var gaby = {
    nombre: 'gaby',
    apellido: 'dguez',
    edad: 21
}

function esMAyorEdad(persona){
    let msj
    const MAYORIA_EDAD = 18
    if(persona.edad >= MAYORIA_EDAD){
        msj = 'Es mayor de edad'
    }else{
        msj = 'Es menor de edad'
    }
    console.log(msj)
}

//esMAyorEdad(gaby)