var name = 'Gaby', lastname = 'Dguez'

//Mayusculas
var nombreEnMayusculas = name.toUpperCase()

//Minusculas
var apellidoEnMinusculas = lastname.toLowerCase()

//Primer letra del nombre
var primeraLetraDelNombre = name.charAt(0)

//Cantidad de caracteres
var cantidadDeLetras = name.length

//Concatenar string:
//interpolacion de texto --> con comillas invertidas
var nombreCompleto = `${name} ${lastname}`

//todo mayusculas
var nombreCompletoMayus = `${name.toUpperCase()} ${lastname.toUpperCase()}`

//Acceder a un substring dentro de un string con substr()

var str = name.charAt(0) + name.charAt(2) //Gb

var str2 = name.substr(1, 2) //ab

//RETO: mostrar ultimo caracter del nombre
var lastChar = name.charAt(name.length-1) // y