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
Pattern5(4);


function pattern6(n){
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15
    let a = 1;
    for(let i = 1;  i<=n; i++){
      let z = "";
      for(let j = 1; j<=i; j++){
          z+=a++ + " ";
      }
      console.log(z)
    }
}
pattern6(5)

function pattern7(n){
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

    let a = ["A", "B", "C", "D", "E"];
    for(let i = 0;  i<n; i++){
      let z = "";
      for(let j = 0; j<=i; j++){
         z+= a[j]+ " "
      }
      console.log(z)
    }
}
pattern7(5)

function pattern8(n){
// A B C D E 
// A B C D 
// A B C 
// A B 
// A
    let a = ["A", "B", "C", "D", "E"];
    for(let i = n-1; i>=0; i--){
      let z = "";
      for(let j = 0; j<=i; j++){
         z+= a[j]+ " "
      }
      console.log(z)
    }
}
pattern8(5)


function pattern9(n){
// A 
// B B 
// C C C 
// D D D D 
// E E E E E 
    let a = ["A", "B", "C", "D", "E"];
    for(let i = 0;  i<n; i++){
      let z = "";
      for(let j = 0; j<=i; j++){
         z+= a[i]+ " "
      }
      console.log(z)
    }
}
pattern9(5)

function pattern10(){
//     A    
//    ABA   
//   ABCBA  
//  ABCDCBA 
    let a = ["A", "B", "C", "D"];
    let n = a.length;
    for(let i = 0;  i<n; i++){
      let z = "";
      for(let j = 0; j<n-i; j++){
         z+=  " "
      }
      for(let j = 0; j<=i; j++){
         z+=  a[j] + ""
      }
       for(let j = i-1; j>=0; j--){
         z+=  a[j] + ""
      }
      for(let j = 0; j<n-i; j++){
         z+=  " "
      }
      console.log(z)
    }
}
pattern10()

function pattern11(){
// E 
// D E 
// C D E 
// B C D E 
// A B C D E 
    let a = ["A", "B", "C", "D", "E"];
    let n = a.length;
    for(let i = n-1;  i>=0; i--){
        let z = "";
      for(let j = i; j<n; j++){
         z+= a[j] +" "
      }
      console.log(z)
    }
}
pattern11()


function pattern12(n){
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

    for(let i = 1;  i<=n; i++){
        let z = "";
      for(let j = n; j >= i; j--){
         z+= "*";
      }
      for(let j = 1; j < 2 * i - 1; j++){
          z+=" ";
      }
      for(let j = n; j >= i; j--){
         z+= "*";
      }
      console.log(z)
    }
    for(let i = 1;  i<=n; i++){
        let z = "";
      for(let j = 1; j <=i ; j++){
         z+= "*";
      }
      for(let j = 1; j <= 2 * n - 2 * i; j++){
          z+=" ";
      }
      for(let j = 1; j <=i ; j++){
         z+= "*";
      }
      console.log(z)
    }
}
pattern12(5)

function pattern13(n){
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
  for(let i = 1 ; i <= n*2-1 ; i++){
        let a = "";
        let gap = i > n ? 2*i-2*n : 2*n-2*i;
        let star = i > n ? 2*n-i:i;
        for(let j = 1; j <= star; j++){
            a+="*"
        }
        for(let j = 1; j <=gap; j++){
            a+=" "
        }
        for(let j = 1; j <= star; j++){
            a+="*"
        }
        console.log(a)
    }
}
pattern13(5)