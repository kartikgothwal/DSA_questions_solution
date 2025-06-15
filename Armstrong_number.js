
function isArmstrong(num){
    let temp = num ;
    let sum = 0;
    while(temp > 0){
        let remainder = temp % 10;
        sum += Math.pow(remainder, 3);
        temp = parseInt(temp/10);
    }
    
    return sum == num ? "Yes":"No";
}
console.log(isArmstrong(627))