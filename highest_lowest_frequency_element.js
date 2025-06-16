//using brute force  
function minMaxCount(arr){
    let minCount = Infinity;
    let minNum  
    let maxCount = -Infinity;
    let maxNum  
    for(let i = 0; i < arr.length; i++){
        let count = 0
        for(let j = i; j < arr.length; j++){
            if(arr[j] == arr[i]){
               count = count + 1;
            }
        }
        if(count > maxCount){
            maxNum = arr[i] 
             maxCount = count;
        }
        if(count < minCount){
            minNum = arr[i] 
            minCount = count;
        }
    }
    return {minNum, maxNum }
}
console.log(minMaxCount([2,2,3,4,4,4,4,2]))

//optimized Solution
function minMaxCount2(arr){
    let freq = {};
    for(let i = 0; i< arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]] +=1
        }else{
            freq[arr[i]] = 1
        }
    }
    let maxCount = -Infinity;
    let minCount = Infinity;
    let  minNum , maxNum;
    for(let keys in freq){
         if(freq[keys] > maxCount){
             maxCount = freq[keys];
             maxNum = keys;
         }
          if(freq[keys] < minCount){
             minCount = freq[keys];
             minNum = keys;
         }
    }
    return {minNum , maxNum}
}
console.log(minMaxCount2([10,5,10,15,10,5]))