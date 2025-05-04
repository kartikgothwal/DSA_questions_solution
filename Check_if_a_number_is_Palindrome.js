// Given a number, check if it is a palindrome or not using recursion.
function PalindromNumber(n, s, temp){
    if( temp <= 0){
        return n == s ? true : false;
    }
    let remainder = temp % 10;
    s = s*10 + remainder;
    temp = parseInt(temp / 10);
    return PalindromNumber(n,s,temp);
}
let n = 121
let temp = n;
let s = 0;
console.log(PalindromNumber(n,s,temp))

// Given a number, check if it is a palindrome or not using iteration.
function PalindromNumber(n){
    let temp = n;
    let final = 0;
    while( temp > 0){
        let rem = temp % 10;
        final = final*10 + rem;
        temp = parseInt(temp / 10);
    }
    return final == n ?  true : false;
}
 
console.log(PalindromNumber(12321))