/* 
  배열.forEach(function(배열원소나 인덱스){});
    배열 객체에서만 사용.
    배열의 각 요소들이 반복될 때마다 함수 호출.
*/
const arr = [1,2,3,4];
arr.num = 10;

// arr.forEach(function(item, index){
//   console.log(index, item);
// });

// 화살표 함수
arr.forEach( (item, index) => console.log(index, item) );

const coffee = ['아메리카노','카페라떼','카페모카','바닐라 라떼'];
console.log('---- 1');
for (let i=0; i<coffee.length; i++) {
  console.log(coffee[i]);
}
console.log('---- 2');
coffee.forEach(showMenu);

function showMenu(drink) {
  console.log(drink);
}

console.log('---- 3');
coffee.forEach(function(drink){
  console.log(drink);
});

console.log('---- 4');
coffee.forEach( drink => console.log(drink) );


