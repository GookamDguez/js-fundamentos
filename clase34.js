const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

//async await no lo soportan todos los navegadores
//para otros navegadores usar un polyfill:
//implementa una función en los navegadores web que no la admiten
async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        //await detendra la ejecucion acá, hasta que todas las promesas se resuelvan
        var personajes = await Promise.all(promesas)
        //console.log(personajes)
        console.table(personajes)
    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()