/*
Factorial de 6:
!6 = 6 * 5 * 4 * 3 * 2 * 1  = 720
!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

*/

function Factorial(n){
    //si no existe la cache
    if(!this.cache){
        this.cache = {}
    }
    debugger
    //si existe la cache
    if(this.cache[n]){
        return this.cache[n]
    }   

    if(n === 1){
        return 1
    }

    this.cache[n] = n * Factorial(n - 1)
    debugger
    return this.cache[n]
}