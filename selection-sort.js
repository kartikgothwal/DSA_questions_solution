
function selectionSort(arr){
    for(let i =0; i<arr.length-1; i++){
        let minindex = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minindex]){
                minindex = j;
                min = arr[j];
            }
        }
        if(minindex !== i){
            let temp = arr[minindex];
            arr[minindex] = arr[i];
            arr[i] = min;
            
        }
    }
    return arr;
}
const testCases = [
  { input: [5, 3, 8, 1, 2], output: [1, 2, 3, 5, 8] },
  { input: [], output: [] },
  { input: [7], output: [7] },
  { input: [4, 4, 4], output: [4, 4, 4] },
  { input: [9, -2, 0, 3, -1], output: [-2, -1, 0, 3, 9] },
  { input: [10, 2, 3, 2, 1], output: [1, 2, 2, 3, 10] }
];

testCases.forEach((test, index) => {
  const result = selectionSort([...test.input]); // spreading input to avoid in-place mutation
  const passed = JSON.stringify(result) === JSON.stringify(test.output);
  console.log(`Test case ${index + 1}: ${passed ? '✅ Passed' : '❌ Failed'}`);
  console.log(`input: ${test.input}, expected: ${test.output} result : ${result}`)
  console.log("\n")
  if (!passed) {
    console.log(`  Input: ${test.input}`);
    console.log(`  Expected: ${test.output}`);
    console.log(`  Got: ${result}`);
  }
});