/*
Un valor inmutable es un valor que no se puede cambiar luego de ser definido, 
se puede modificar pero debe ser en un objeto diferente.
*/

const gaby = {
    nombre: 'Gaby',
    apellido: 'Dguz',
    edad: 21
}

//const cumpleanios = persona => persona.edad++

const cumpleaniosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})
//En consola
gaby
//aparece edad 21
const gaby22 = cumpleaniosInmutable(gaby)
//aparece edad 22
gaby
//Permanece la edad de 21