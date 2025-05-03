function reverseArray(arr){
    let left = 0, right = arr.length - 1;
    while( left < right ){
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        right--, left++
    }
    return arr;
}
console.log(reverseArray([5,4,3,2,1]))


//this is the recursive way to reverse an array using destructuring assignment

function reverseArrayUsingRecursion(arr, n , c){
    if(c >= n) return arr;
    [arr[n], arr[c]] =   [arr[c], arr[n]];
    return reverseArrayUsingRecursion(arr,--n,++c)
}
let testarr = [5,4,3,2,1];

console.log(reverseArrayUsingRecursion(testarr, testarr.length - 1, 0))

// this is the recursive way to reverse an array
function reverseArrayUsingRecursion(arr, n , c){
    if(c >= n) return arr;
    let temp = arr[n];
    arr[n]= arr[c];
    arr[c]= temp;
    return reverseArrayUsingRecursion(arr,--n,++c)
}
let testarr2 = [5,4,3,2,1];

console.log(reverseArrayUsingRecursion(testarr2, testarr2.length - 1, 0))