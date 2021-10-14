// 함수 호출
let anony = function (a, b) {
  console.log(a * b);
}
anony(10, 2);


let named = function sum (a, b) {
  console.log(a * b);
}

// sum(2, 7); 변수에 할당된 경우 함수명으로 호출시 에러. 외부에서 내부의 함수명 접근이 불가능하기 때문

named(2, 7);
// 변수 named는 함수명 x.
// 할당된 함수를 가리키는 참조값을 저장하기 때문에 함수를 가리키는 변수명을 사용해야 함.

let sameNamed = function sameNamed (num) {
  console.log(num * num);
}
sameNamed(3);// 이런 경우 함수명이 아닌 변수명으로 호출