let arr = [10, 50, 22, 36, 2];

console.log("forEach");
const callbackEach = (val) => {
  console.log(val);
};

const myEach = (arr, callbackEach) => {
  for (let i = 0; i < arr.length; i++) {
    callbackEach(arr[i]);
  }
};

myEach(arr, callbackEach);
//
//
//
console.log("Map");
function callbackMap(num) {
  console.log(num * 100000000);
}
function myMap(arr, callbackMap) {
  for (let i = 0; i < arr.length; i++) {
    callbackMap(arr[i]);
  }
}

myMap(arr, callbackMap);
//
//
//
console.log("Filter:");

function callbackFilter(num) {
  return num < 40;
}

const myFilter = (arr, callbackFilter) => {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFilter(arr[i])) filteredArray.push(arr[i]);
  }
  return filteredArray;
};

console.log(myFilter(arr, callbackFilter));

//
//
//
console.log("Some:");

function callbackSome(num) {
  return num > 2;
}

function mySome(arr, callbackSome) {
  for (let i = 0; i < arr.length; i++) {
    if (callbackSome(arr[i])) {
      return true;
    }
    return false;
  }
}

console.log(mySome(arr, callbackSome));

//
//
//
console.log("Every:");

function callbackEvery(num) {
  return num > 2;
}
function myEvery(arr, callbackEvery) {
  for (let i = 0; i < arr.length; i++)
    if (!callbackEvery(arr[i])) return false;
    else return true;
}

console.log(myEvery(arr, callbackEvery));
//
//
//

console.log("Zeros:");
let nums = [0, 1, 0, 3, 12];
function moveZeros(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
}
console.log(moveZeros(nums));
