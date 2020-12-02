//2015 se actualiza JS
//EcmaScript --> estandar en el cual se basa JS, son todas las funcionabilidades que trae el lenguaje
//aunque usemos class, siempre son todos prototipos

class Persona{
    constructor(nombre, apellido, altura){ //constructor :v
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //Enviando una funcion como parametro.
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){ 
        super(nombre, apellido, altura)
    }
    //Enviando una funcion como parametro.
    saludar(fn){
        var {nombre, apellido} = this
        //Es equivalente
        // this.nombre = nombre
        // this.apellido = apellido
        console.log(`Hola, me llamo  ${nombre} ${apellido} soy desarrollador/a`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabia que eras desarrollador/a`)
    }
}

var gaby = new Persona('Gaby', 'Dguez', 1.8)
var rambo = new Desarrollador('Rambo', 'Dguez', 1.0)
var henry = new Persona('Henry', 'Dguez', 0.10)

henry.saludar()
////Enviando una funcion como parametro.
gaby.saludar(responderSaludo)
rambo.saludar(responderSaludo)