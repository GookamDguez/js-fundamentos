edad = 21
//Incrementar
// edad = edad + 1
edad += 1

//Decrementar
var peso = 42
peso -= 2

var sandwich = 1
peso += sandwich //41

// ==== DECIMALES ====

var precioVino = 200.3
var total = precioVino * 3 //600.9000000000001
//solucionar los decimales
var totalSolucion = Math.round(precioVino * 100 * 3 )/ 100 //600.9
//Agregarle más decimales pero se vuelve una cadena
var totalStr = total.toFixed(2)
//pasarlo a decimales
var total2 = parseFloat(totalStr)

// DIVISION
var pizza = 8
var persona = 2
var porcionesPorPersona = pizza / persona
