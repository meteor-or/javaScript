console.log('----- 추가');
const obj = [
  { order: '아메리카노' }, 
  { order: '카페 라떼' }, 
  { order: '바닐라 라떼' }
];
console.log(obj);
console.log(obj[1]);// 인덱스 1: 카페 라떼
obj.push({ order: '카페모카'});// 기존 배열에 새로운 항목 추가
console.log(obj);
console.log(obj.length);// 4

console.log('----- delete 삭제');
const num1 = [ 1, 2, 3, 4 ];
delete num1[2];// 인덱스 2: 3 삭제
console.log(num1);// [ 1, 2, <1 empty item>, 4 ] 원소의 값만 삭제

console.log('----- splice 삭제');
// 특정 항목 삭제. 원소의 값뿐만 아니라 원소 자체를 완전히 삭제
// splice(시작 인덱스, 삭제할 원소수)
const num2 = [10, 20, 30, 40];
let show = num2.splice(0, 2);// 인덱스 번호 0부터 2개를 지움
console.log('num2:', num2);// [ 30, 40 ]
console.log('지운 원소:', show);// [ 10, 20 ]

console.log('----- slice 잘라내기');
// 기존 배열이 수정되지 않음
const num3 = [10, 20, 30, 40];
// slice(시작 인덱스, 잘라낼 원소수)
let slice = num3.slice(0, 2);
console.log('slice: ', slice);// [ 10, 20 ]
console.log('num3:', num3);// [10, 20, 30, 40]