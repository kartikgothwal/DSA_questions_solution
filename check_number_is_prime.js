function primeNumber(num){
    for(let i = 2; i<=Math.sqrt(num); i++){
         if(num % i == 0){
              return false
         }
    }
    return true
}
console.time("Start")
console.log(primeNumber(36))
console.timeEnd("Start")
