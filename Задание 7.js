let evenArr = [];
let oddArr = [];
let zeroAndNull = [];

const arr = [0, null, 1, 2, 3, 4, 'test', 5, 6, 7, null, 8, 9, 10];

function filterArray() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroAndNull.push(arr[i]);
    }

    if (typeof arr[i] !== 'number') {
      zeroAndNull.push(arr[i]);
    }

    if (arr[i] % 2 === 0 && typeof arr[i] === 'number') {
      evenArr.push(arr[i]);
    }

    if (arr[i] % 2 !== 0 && typeof arr[i] === 'number') {
      oddArr.push(arr[i]);
    }
  }

  console.log(evenArr.length);
  console.log(oddArr.length);
  console.log(zeroAndNull.length);
}

filterArray();
