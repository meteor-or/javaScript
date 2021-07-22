/*
 증감 연산자:
  변수 값을 1씩 증가 시키거나 감소 시킴
  ++, --
  ++a 전위 증가 연산자(변수를 불러오기 전에 1 증가 후 출력)
  a++ 후위 증가 연산자(변수를 먼저 출력 후 1 증가)
*/

let a = 10, b = 20;
console.log('a', a);// 10
console.log('a', a++);// 10(11) 변수 a를 출력 후 +1. 출력 값은 10이지만 실질 값은 11
console.log('변수 a =', a);// 11

console.log('b', b);// 20
console.log('b', ++b);// 21 변수 b를 불러오기 전 +1 연산 후 출력
console.log('b', b);// 21

let c = 9;
console.log(c);// 9

// 재할당
c = c + 1;// 기존 변수 c에 +1 한 후 다시 변수 c에 대입 10
console.log(c);// 10

console.log(++c);// c = 11
console.log(++c);// 12
console.log(++c);// 13

let  d = 10;
console.log('d', d++);// 10(11)
console.log('d', d++);// 11(12)
console.log('d', d++);// 12(13)

console.log(d);