// 숫자 타입 변환

// Number 생성자 함수 이용
console.log(Number('0'));// 0
console.log(Number('-1'));// -1
console.log(Number('10.55'));// 10.55
console.log(Number(true));// 1
console.log(Number(false));// 0
console.log(Number('문자열'));// NaN

// parseInt, parseFloat 함수 이용(문자열만 변환 가능)
console.log(parseInt('0'));// 0
console.log(parseInt('-1'));// -1
console.log(parseInt('10.22'));// 10 정수 
console.log(parseFloat('10.22'));// 10.22 실수

// + 단항 연결 연산자 이용
console.log( + '0');// 0
console.log( + '-1');// -1
console.log( + '10.53');// 10.53
console.log( + true);// 1
console.log( + false);// 0

// * 산술 연산자 이용
console.log('0' * 1);// 0
console.log('-1' * 1);// -1
console.log('10.11' * 1);// 10.11
console.log(true * 1);// 1
console.log(false * 1);// 0