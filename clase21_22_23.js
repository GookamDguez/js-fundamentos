//No hay clases en si, sino que prototipos
/*Un poco de teoría interesante vista en el video:
- Hablar de objetos en javascript es hablar de prototipos.
- this hace referencia al objeto en contexto actual en javascript.
- la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
- La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
- THIS es WINDOWS, es el espacio global*/
function Persona(nombre, apellido, altura){ //constructor
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
//RETO: agregar atributo altura y agregar function soyAlto, >= a 1.8
Persona.prototype.soyAlto = function(){
    this.altura >= 1.8 ? console.log('Soy Alto') : console.log('Soy bajito')
    //prototipo es un objeto más de js
    //return this.altura > 1.8
}
var gaby = new Persona('Gaby', 'Dguez', 1.8)
var henry = new Persona('Henry', 'Dguez', 0.10)
var rambo = new Persona('Rambo', 'Dguez', 1.0)

gaby.saludar()
henry.saludar()
rambo.saludar()
//llamandolos:
gaby.soyAlto()
henry.soyAlto()
rambo.soyAlto()