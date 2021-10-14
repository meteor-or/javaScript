/*
  배열 Array: 
    여러 개의 '데이터'를 담는 특변한 변수로 인덱스 번호로 관리하며 배열의 값은 변할 수 있다.
    [0,1,2,3] <- 배열 작성 방식
    인덱스 번호는 0부터 시작
*/

// 리터럴 생성
const arr = [];// 빈 배열 생성
console.log(arr[1]);// undefined. 존재하지 않는 원소에 접근
console.log(arr.length);// 0. length는 배열에 저장된 원소의 수

console.log('-------------1');
const arr1 = [1, 2, 3];// 인덱스 0: 1, 인덱스 1: 2, 인덱스 2: 3
console.log(arr1);// [1, 2, 3]
console.log(arr1[1]);// 2

console.log('-------------2');
const arr2 = [
  1,
  'string',
  true,
  function(){},
  arr1,
  null,
  undefined
];
console.log(arr2);
console.log(typeof arr2);// object
console.log(arr2[1]);// 인덱스1: 'string'
console.log(arr2[2]);// 인덱스2: true
console.log(arr2[4]);// 인덱스4: [ 1, 2, 3 ]
console.log(arr2.length);// 배열 원소 수 7
console.log(arr2[1].length);// 해당 인덱스 번호의 원소 글자 수 6 

console.log('-------------3');
const arr3 = [1,2,3,4];
console.log(arr3);// [1,2,3,4]
arr3[0] = '문자열';// 인덱스 번호 0의 원소를 변경
console.log(arr3);// [ '문자열', 2, 3, 4 ]
console.log(arr3[4]);// undefined
arr3[4] = 5;// 인덱스 번호 4의 위치에 추가
console.log(arr3);
console.log(arr3.length);// 5