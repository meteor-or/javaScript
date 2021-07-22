/* 호이스팅 hoisting 이란?
  var 선언문이나 function 선언문 등 모든 선언문이 해당 영역의 앞으로 옮겨진 것처럼 동작하는 특성.
*/

console.log(a);// undefined 
var a = 123;
console.log(a);// 123
{
  var a = 456;//let 키워드 사용 x
}
console.log(a);// 456 블록 레벨 스코프 내의 변수 var a는 전역변수로 적용.
// { let a = 456; } 인 경우 123 출력. 블록 레벨 스코프의 영역을 가짐