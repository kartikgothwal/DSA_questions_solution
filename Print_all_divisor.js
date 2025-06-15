//better approach to find all divisors of a number
function Divisors(num){
    let result = [];
    let j = 0
    for(let i = 1; i<=num; i++){
        if(num % i == 0){
            result[j++]=i
        }
    }
    return result
}
console.time("Start")
console.log(Divisors(36))
console.timeEnd("Start")



//optimize Approach
function Divisors2(num){
    let result = [];
    
    for(let i = 1; i<=Math.sqrt(num); i++){
         if(num % i == 0){
             result.push(i);
             let rem = num / i;
             if(i != rem){
                result.push(rem)
             }
         }
    }
    return result.sort((a,b)=>a-b)
}
console.time("Start")
console.log(Divisors2(36))
console.timeEnd("Start")
