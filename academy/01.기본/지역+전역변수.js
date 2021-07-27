// 변수 선언과 동시에 값 대입
// 전역 변수
var x = 100;
var y = 200;
var z = 300;

// 함수 선언
function area() {
  // 함수 레벨 스코프 function level scope: 함수 내에서만 유효한 값을 가짐
  var x = 200;//지역 변수
  var y = 300;//지역 변수
  z = 800;//var 키워드 생략시 전역 변수
}

console.log(x);// 100
console.log(y);// 200
console.log(z);// 300

area();// 함수 호출
console.log('x: ' + x);// 100
console.log('y: ' + y);// 200
console.log('z: ' + z);// 800