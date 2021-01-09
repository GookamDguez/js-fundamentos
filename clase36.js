function diasEntreFEchas(fecha1, fecha2){
    //milisegundos en un día 
    const unDia = 1000 * 60 * 60 *24
    //dará el resultado en milisegundos y con abs ayuda por si lo ingresan al reves
    const diferencia = Math.abs(fecha1 - fecha2)
    
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1999, 1, 25)

