// Check if a string is palindrome or not
function Pailndrome(str){
    let left = 0, right = str.length -1 ;
    while( left < right) {
        if(str[left]  != str[right]){
            return false
        }
        left ++ , --right;
    }
    return true;
}
console.log(Pailndrome('SMS'))

// Using str Reverse Method
function Pailndrome(str){
    let str2 = "";
    for( let i = str.length - 1; i >= 0; i-- ){
        str2+=str[i];
    }
    return str2 == str ? true : false ;
}
console.log(Pailndrome('ABCDCBA'))

// Recursive Approach
function Pailndrome(str,n,c){
    if(n <= c) return true;
    if(str[n] != str[c]) return false;
    return Pailndrome(str,--n,++c);
}
let str = 'Kartik'
console.log(Pailndrome(str, str.length-1,0))
