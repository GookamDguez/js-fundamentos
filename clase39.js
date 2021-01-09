/*Closures:
Funcion que recuerda el estado de las cosas, cuando fue invocada.
*/
/*
Basicamente es que mi funcion anonima recuerda el valor que le
enviaron a la funcion crearSaludo y así puedo utilizarlo.
*/
function crearSaludo(finalFrase){
    return function(nombre){    //funcion anonima
        console.log(`Hola ${nombre} ${finalFrase}`)
    }
}
    const saludoArgentino = crearSaludo('che')
    const saludoMexicano = crearSaludo('güey')
    const saludoColombiano = crearSaludo('amigo')

    saludoArgentino('gaby')
    saludoMexicano('gaby')
    saludoColombiano('gaby')
    
