function pattern(n){
//     *
//    ***
//   *****
//  *******
// *********
    for(let i = 1; i <= n ; i++){
        let a = "";
        for(let k = n; k > i; k--){
            a+=" ";
        }
        for(let j =1 ; j < i*2; j++){
            a+="*"
        }
        console.log(a)
    }
}
 pattern(5)


function pattern2(n){
// *********
//  *******
//   *****
//    ***
//     *
    for(let i = n; i >=1 ; i--){
        let a = "";
        for(let k = n; k > i; k--){
            a+=" ";
        }
        for(let j =2*i-1 ; j >=1; j--){
            a+="*"
        }
        console.log(a)
    }
}
 pattern2(5)


function Pattern3(n){
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
    for(let i =0; i<n*2; i++){
        let star = i>n ? 2*n-i : i;
        let a = "";
        for(let j = 1; j<= star; j++){
            a+= "*"
        }
        console.log(a)
    }
}
Pattern3(5)