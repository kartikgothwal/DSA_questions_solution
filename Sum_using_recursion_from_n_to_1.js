function sum(n){
    if(n == 1) return 1;
    return n + sum(n-1);
}
console.log(sum(10))

// this is the forumula to calculate the sum of n numbers
// 1 + 2 + 3 + ... + n = n * (n + 1) / 2
// this is the iterative way to calculate the sum of n numbers
function sum2(n){
    return (n * ( n + 1))/2
}
console.log(sum(10))