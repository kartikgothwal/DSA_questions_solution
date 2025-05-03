function sum(c,n){
    if( n == c ) return n;
    return c + sum( c + 1, n);
}
console.log(sum(1, 5))