// 문자열 타입 String
var str = "string"; // 큰 따옴표
str = 'string'; // 작은 따옴표
str = `string`; // ES6 이상
str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';

str += ' add';
str = 'string';
str = str.substring(0,2);// 인덱스 0부터 시작해서 2개까지만 출력 st
str = str.toUpperCase();// 대문자 ST
console.log(str);

// 숫자 Number
var num = 10;// 정수
num = 1.10;// 실수
num = -20;// 음의 정수
console.log(num);

// 논리 boolean
var boo = true;// boolean. 참 == 1
boo = false;// 거짓 == 0
console.log(boo);

  //typeof 연산자는 타입을 나타내는 문자열을 반환
  console.log(typeof boo);// boolean
  console.log(typeof num);// number

// 함수
var fn = function x() {};

// undefined 
// 선언은 되었지만 값을 할당하지 않은 변수에 접근할 때
// 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined 반환
// 개발자가 의도적으로 할당한 값이 아니라 자바스크립트 엔진에 의해 초기화 된 값
var un;
console.log(un);

// null
// 값 없음. 개발자가 의도적으로 변수에 값을 넣지 않았다는 것을 명시할 때 사용
var nu = 'abc';
nu = null;
console.log(nu);//참조 정보가 제거

// 심볼 Symbol 변경 불가능한 원시 타입 값으로 주로 유일한 객체 프로퍼티 키를 만들기 위해 사용
var key = Symbol('key');
console.log(typeof key);// symbol

