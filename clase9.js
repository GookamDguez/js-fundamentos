var x = 4, y = '4'

var gaby = { nombre: 'gaby' }
//var anotheperson = { nombre: 'gaby' }
//var anotheperson = gaby

//OBJETO LITERAL
var anotheperson = {
    ...gaby
}

//comparar 2 variables 
x == y // true
//leva los 2 datos que comparamos a un mismo tipo

x === y //false
// Igualacion estricta.

gaby == anotheperson // false
gaby === anotheperson // false

/**
 * Dará siempre true, solo cuando hagan referncia al mismo objeto
 * como en la linea 5.
 * Si modifico anotherperson. nombre = 'coco'
 * entonces gaby tambien sale afectado y cambiado.
 * porque ambos apuntan al mismo objeto.
 */

