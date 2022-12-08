function checkArrayType(arr) {
  let arr1 = arr.map(e=>typeof e);
  return [...new Set(arr1)].length === 1;
}

function checkArrayType1(arr) {
  return arr.every((e,i,a) => typeof e === typeof a[0]);
}
function equalElementsInArray(arr) {
  const similars = arr
    .filter((el, i, arr) => arr.lastIndexOf(el) !== i)
    .map(el => [el, el]);
  return similars.length ? similars[0] : 'All elements are different';
}

console.log(checkArrayType([1,"2",3,4]));
console.log(checkArrayType1([1,2,3,4]));
console.log(equalElementsInArray([1,2,3,4]))
