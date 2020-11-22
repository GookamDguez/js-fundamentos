var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador ++
} while( !llueve() )

//Reto: si llueve 1 vez, que diga 1 vez :v
// si llueve N veces, que diga n veces :v
console.log(contador === 1 ? `Fui a ver si llovia ${contador} vez` 
                            : `Fui a ver si llovia ${contador} veces`)