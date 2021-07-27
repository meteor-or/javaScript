// 문자열 타입 변환

// String 생성자 함수를 이용한 변환
console.log(String(1));// '1' 숫자형 문자열
console.log(String(NaN));// 'NaN' 문자열
console.log(String(true));// 'true'
console.log(String(false));// 'false'

// Object.prototype.toString 메서드 이용
console.log((1).toString());// '1' 숫자형 문자열
console.log(
  (NaN).toString()
);// 'NaN' 문자열
console.log((true).toString());
console.log((false).toString());

// 더하기 연산자를 이용
console.log(1 + '');
console.log(NaN + '');
console.log(true + '');
console.log(false + '');

let x = 10;// 숫자 데이터 타입
let str1 = x.toString();
console.log(typeof x, typeof str1);// number string

let y = true;
let str2 = y + '';
console.log(typeof y, typeof str2);// string