//useing an object to count the frequency of numbers in an array
function freq(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return obj;
}
console.log(freq([10, 5, 10, 15, 10]));

//using a Map to count the frequency of numbers in an array
function freq2(arr) {
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!myMap.has(arr[i])) {
      myMap.set(arr[i], 1);
    } else {
      const value = myMap.get(arr[i]);
      myMap.set(arr[i], value + 1);
    }
  }
  return myMap;
}
console.log(freq2([10, 5, 10, 15, 10]));

//using an array to count the frequency of numbers in an array
function freq(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!temp[arr[i]]) {
      temp[arr[i]] = 1;
    } else {
      temp[arr[i]] += 1;
    }
  }
  return temp;
}
console.log(freq([10, 5, 10, 15, 10]));

