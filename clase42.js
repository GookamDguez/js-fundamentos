//cuando una linea empieza con una array
console.log('Soy Gaby')
;[1,2,3].forEach(n => console.log(n*2))

//antes un texto, como en la linea 8?
const nombre = 'Gaby'
console.log('Hey, soy Gaby');
`${nombre} es una desarrolladora`


//Despues de un return, si JS encuentra un ENTER,
//Es como si fuera un ; y da error.
function calcularDoble(num){
    return {
         original: num, doble: num * 2
    }
}