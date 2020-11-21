var gaby = {
    //clave: valor
    nombre: 'Gaby',
    apellido: 'Dguez',
    edad: 21
}

/*
Los objetos que se pasan por parametros, se pasan por referencia.
es decir, que si se modifican dentro del cuerpo de una funcion
su valor se ve modificado fuera de esa funcion tambien.
*/

function cumple(persona){
    persona.edad += 1
}
cumple(gaby) // 22

/*  EXPLICACION:
    A los tres puntos “…” se llama operador de propagación (Spread operator), 
    es una nueva implementación en ES6. 
    Básicamente lo que hace es crear un duplicado de nuestro objeto 
    para luego modificarlo según lo que necesitemos o agregarle.
*/
//objeto nuevo, copiando todo lo que tenia el objeto anterior
// y solo modificaremos 1 atributo
function cumpleannios(persona){
    return{
        ...persona,
        edad: persona.edad + 1 ,
        frase: "sirve esto?"
    }
}
cumpleannios(gaby) //{nombre: "Gaby", apellido: "Dguez", edad: 23, frase: "sirve esto?"}
// si consulto gaby de nuevo, no me aparece el atributo FRASE, entonces si quiero mantenerlos debo crear otro objeto
//no modificar el objeto, debo crear uno nuevo!

var gabyRuca =cumpleannios(gaby) // aqui si esta el atributo de FRASE

