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


function Pattern4(n){
// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 
    for(let i =0; i<=n; i++){
        let prev = i % 2 == 0 ? 0 : 1;
        let a = "";
        for(let j = 1; j<=i; j++){
            a += prev + " ";
            prev = 1 - prev;
        }
        console.log(a)
    }
}
Pattern4(5)


function Pattern5(n){
// 1      1
// 12    21
// 123  321
// 12344321
    for(let i = 1; i<=n; i++){
        let a = ""
        for(let j = 1; j <= i; j++){
             a+= j
        }
        for(let j = 1; j <=2*n -2*i; j++){
            a+= " "
        }
        for(let j = i; j >= 1; j--){
               a+= j
        }
            console.log(a)
    }
}
Pattern5(4)