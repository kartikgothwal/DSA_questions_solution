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
