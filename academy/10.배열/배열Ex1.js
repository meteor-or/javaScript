// 좋아하는 과일 4개를 배열로 만들고 반복문을 이용하여 콘솔에 순차적으로 출력하시오.
const fruits = ['수박','참외','복숭아','자두'];

for(let i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}
console.log('-------');
for (let idx of fruits) {
  console.log(idx);
}
console.log('-------');
// fruits.forEach(function(idx) {
//   console.log(idx);
// });
fruits.forEach(idx => console.log(idx) );