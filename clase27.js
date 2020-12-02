//Vamos a hacer un request
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)

//version larga
// $.get(lukeUrl, opts, function(dataLuke){
//     //arguments lo tienen todas las funciones y nos muestran los parametros que recibe esa funcion
//     console.log(`Hola yo soy ${dataLuke.name}`)
// })