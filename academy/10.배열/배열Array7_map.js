// map(); 배열 안의 원소를 변환할 때 사용
// 새로운 배열을 반환하고 기존의 원본 배열은 수정하지 않음
const arr = [1,2,3,4,5,6,7,8];
// const blank = [];

// console.log('--- 1');
// for (let i=0; i<arr.length; i++) {
//   blank.push(arr[i] * arr[i]);
// }
// console.log(blank);

console.log('--- 2');
// arr.forEach(function(n){
//   blank.push(n * n);
// });
// arr.forEach( n => blank.push(n * n) );
// console.log(blank);

console.log('--- 3');
// const num = function (n) {
//   n * n;
// }
const num = n => n * n;
// 배열을 순회하며 각 요소에 매개변수로 주어진 콜백함수를 실행
const blank = arr.map(num);
console.log(blank);