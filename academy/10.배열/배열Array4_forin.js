/* 
  for (.. in ..);
    객체 프로퍼티 순회를 위해 주로 사용.
    배열에서도 사용 가능 하나 배열또한 객체이므로 불필요한 프로퍼티까지 출력되고 원소의 순서가 보장되지 않아 잘 사용하지 않음.
*/

const arr = [1, 2, 3, 4];
arr.num = 10;

for (let idx in arr) {
  console.log(`index: ${idx}, value: ${arr[idx]}`);
}

console.log('------------');
const coffee = {
  drink: '아메리카노',
  price: 4000,
  'kind of': 'ice'
};
console.log(Object.keys(coffee));// 키 반환
console.log(Object.values(coffee));// 값 반환
console.log(Object.entries(coffee));// 배열 형태로 반환

for (let key in coffee) {// 객체 순회를 위해 주로 사용
  //console.log(key);
  console.log(`${key}: ${coffee[key]}`);
}