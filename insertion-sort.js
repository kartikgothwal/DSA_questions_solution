
function insertionSort(arr){
    for(let i =0; i<arr.length; i++){
        for(let j = i; j>0; j--){
            if(arr[j] < arr[j-1]){
                swap(j-1,j,arr)
            }
        } 
    }
    return arr;
}
function swap(max,min,arr){
    let temp= arr[max];
    arr[max] =arr[min];
    arr[min]=temp;
}
const testCases = [
  { input: [5, 3, 8, 1, 2], output: [1, 2, 3, 5, 8] },
  { input: [13,24,46,20,52,9], output: [9,13,20,24,46,52] },
  { input: [7], output: [7] },
  { input: [4, 4, 4], output: [4, 4, 4] },
  { input: [9, -2, 0, 3, -1], output: [-2, -1, 0, 3, 9] },
  { input: [10, 2, 3, 2, 1], output: [1, 2, 2, 3, 10] }
];

testCases.forEach((test, index) => {
console.time("Starts")
  const result = insertionSort([...test.input]); // spreading input to avoid in-place mutation
  const passed = JSON.stringify(result) === JSON.stringify(test.output);
  console.log(`Test case ${index + 1}: ${passed ? '✅ Passed' : '❌ Failed'}`);
  console.log(`input: ${test.input}, expected: ${test.output} result : ${result}`)
   console.timeEnd("Starts")
  console.log("\n")
  if (!passed) {
    console.log(`  Input: ${test.input}`);
    console.log(`  Expected: ${test.output}`);
    console.log(`  Got: ${result}`);
  }
 

});