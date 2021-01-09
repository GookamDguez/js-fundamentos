/*
Bind(.., ..)
1er. parametro es el contexto ¿Quien será el this?
2do. los parametros en orden que aparezcan.

Simplemente retorna la funcion con el contexto cambiado.
*/

/*
Call y Apply ejecutan la funcion en ese momento.
primero es el contexto y despues los parametros...

en Apply los parametros son un array de elementos de la funcion.
*/

const gaby = {
    nombre: 'Gaby',
    apellido: 'Dguz'
}

const rambo = {
    nombre: 'Rambo',
    apellido: 'Hdz'
}

function saludar(saludo = 'Hoola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//Bind cambia el this de una funcion
//Nos devuelve una nueva funcion, atando el valor que le enviamos al this de la funcion saludar.
//const saludarAGaby = saludar.bind(gaby)
//const saludarARambo = saludar.bind(rambo)

//setTimeout(saludar.bind(gaby), 1000)

//Modificando lo que le enviamos
//setTimeout(saludar.bind(gaby, 'Hola, que pex'), 1000)

//saludar.call(gaby, 'Holis')

saludar.apply(gaby, ['Holiwis'])
