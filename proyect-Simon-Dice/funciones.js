const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
      class Juego {
        constructor() {
          this.inicializar()
        }

        inicializar() {
          btnEmpezar.classList.add('hide')
        }
      }

      function empezarJuego() {
        var juego = new Juego()
      }