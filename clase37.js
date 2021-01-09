
/*
Una función recursiva es básicamente aquella 
que se llama (o se ejecuta) a sí misma de forma controlada, 
hasta que sucede una condición base.
*/
/* Para realizar recursividad necesitamos 2 cosas:
     1 caso base y 1 caso recursivo.

     DIVISION ENTERA:
    13 / 4 = 3
    Haciendolo con restas...
    13 - 4 = 9      1   //caso recursivo
    9 - 4 = 5       1   //caso recursivo
    5 - 4 = 1       1   //caso recursivo
    1 - 4 = -3      0   //este es el caso base
*/

function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){//caso base
        return 0
    }

    return 1 + divisionEntera( dividendo - divisor, divisor)
}