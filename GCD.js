//Euclidean Algorithm
function findGCD(n1,n2){
    const smaller = n1 > n2 ? n2 : n1 ;
    const greater =  n1 > n2 ? n1 : n2 ;
    const sub = greater-smaller
    if(sub == 0){
        return smaller;
    }
    return findGCD(sub, smaller)
}
console.log(findGCD(20,15))