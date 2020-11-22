var signo = prompt('Cuál es tu signo?')

switch(signo){
    case 'piscis':
        console.log('Hola piscis')
        break
    case 'acuario':
        console.log('Hola acuario')
        break
    case 'libra':
        console.log('Hola libra')
        break
    case 'geminis':
    case 'géminis':
        console.log('hola géminis')
        break
    case 'cancer':
    case 'cáncer':
        console.log('hola cáncer')
        break
    default: 
        console.log('No es un signo zodiacal valido')
        break
}