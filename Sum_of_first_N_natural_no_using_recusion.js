function Sum(n){
    if(n == 1) return 1;
    return n + Sum(--n);
}
console.log(Sum(5))