//No hay Herencia de clases, solo hrerencia de prototipos
//Herencia de manera viejita
function heredaDe(protipoHijo, protipoPadre){
    //Asignarle un prototipo a la clase hija
    var fn = function(){}
    fn.prototype = protipoPadre.prototype
    protipoHijo.prototype = new fn
    //asignar funcion constructora
    protipoHijo.prototype.constructor = protipoHijo
}
//---------------------

function Persona(nombre, apellido, altura){ //constructor
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo  ${this.nombre} ${this.apellido} soy desarrollador/a`)
}

// var gaby = new Persona('Gaby', 'Dguez', 1.8)
// var henry = new Persona('Henry', 'Dguez', 0.10)
// var rambo = new Persona('Rambo', 'Dguez', 1.0)