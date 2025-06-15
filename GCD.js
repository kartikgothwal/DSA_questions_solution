//Euclidean Algorithm
//optimize Approach
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

//Better Approach
// function findGCD(n1,n2){
//     const smaller = n1 > n2 ? n2 : n1 ;
//     let GCD=1;
//     for(let i = 1; i <= smaller; i++){
//         if( n1%i==0 && n2%i==0){
//             GCD = i;
//         }
//     }
//     return GCD;
// }
// console.log(findGCD(20,40))