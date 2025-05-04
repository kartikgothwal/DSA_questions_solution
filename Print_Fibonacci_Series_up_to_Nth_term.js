function fib(n){
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    const fibo =[0,1];
    for(let i = 0 ; i <= n; i++){
        if(i < 2){
            fibo[i]=i;
        }else{
            fibo[i] = fibo[i-1] + fibo[i-2]; 
        }
        console.log(fibo[i])
    }
}
 fib(5)