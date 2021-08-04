// Math 객체: 수학과 함수를 위한 프로퍼티와 메서드를 제공하는 내장 객체

console.log(Math.PI);// 3.141592653589793

// 인수의 절대값 반환. 절대값은 반드시 0 또는 양수
let abs = Math.abs(5);// 5
abs = Math.abs(5.12345);// 5.12345
abs = Math.abs(-5.12345);// 5.12345 양수로 반환
abs = Math.abs('-1');// 1
abs = Math.abs('');// 0
abs = Math.abs(null);// 0
abs = Math.abs(undefined);// NaN
abs = Math.abs();// NaN
abs = Math.abs('string');// NaN
console.log('abs:',abs);

// 소수점 이하 반올림하여 정수로 반환
let round = Math.round(1.25);// 1
round = Math.round(3.75);// 4
round = Math.round(-1.4);// -1
round = Math.round(-5.9);// -6
round = Math.round();// NaN
console.log('round:',round);

// 소수점 이하 올림 정수로 반환
let ceil = Math.ceil(1.2);// 2
ceil = Math.ceil(-1.9);// -1
console.log('ceil:', ceil);

// 소수점 이하 내림 정수로 반환
let floor = Math.floor(1.8);// 1
floor = Math.floor(1.4);// 1
floor = Math.floor(-1.9);// -2
floor = Math.floor(-9.2);// -10
console.log('floor:', floor);

// 제곱근
console.log(Math.sqrt(9));

// 0~1 사이의 랜덤 실수 반환. 0은 포함되나 1은 포함되지 않음.
// console.log('random:', Math.random()); 0.06624431737158942

// 1~10까지의 랜덤 정수
// 10단위 정수의 경우 *10, 100단위 정수의 경우 *100, ....
let random = (Math.random() * 10) + 1;
random = Math.floor(random);
console.log(random);// 1~10까지의 정순