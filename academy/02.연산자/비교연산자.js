/*
  비교 연산자:
    <, >, ==, <=, >=, !=
    두 개 이상의 값 비교.
    주로 조건문에 많이 사용되며 결과 값은 true(1)와 false(0)으로 출력.
    좌항 기준.
*/

let i;
// 좌변 = 우변(좌항<우항)
i = 5 < 4;// ~보다 작다. 좌항(5)은 우항(4)보다 작다. 거짓 == false == 0
i = 5 > 4;// ~보다 크다. 좌항(5)은 우항(4)보다 크다. 참 == true == 1
i = 5 == 4;// 같다. 좌항(5)은 우항(4)과 같다. false
i = 5 != 4;// 같지 않다. 좌항(5)과 우항(4)은 같지 않다. true

i = 5 <= 4;// 작거나 같다. 5는 4보다 작거나 같다. false
i = 5 >= 4;// 크거나 같다. 5는 4보다 크거나 같다. true

console.log(i);

console.log(1 == true);// true
console.log('345' == 345);// true 숫자형 문자열이 자동 변환되어 비교 
console.log('15' > '12');// true 숫자형 문자열이 자동 변환되어 비교
console.log('015' > '12');// false

// (40 > 25) 비교값 -> true
// true(1) > 10 -> false
console.log(40 > 25 > 10);// false

console.log(0 == false);// true
console.log('' == false);// true
console.log('' == 0);// true
console.log('' == null);// false
console.log('' == undefined);// false

console.log('korea' > 'america');// true 11 > 1
console.log('한글' > '영어');// true 14 > 8
console.log('한글' > 'zoo');// true(한글 우선) 14 > 26

// === 데이터 타입까지 완전히 같다(엄격한 비교)
console.log('1234' === 1234);// false (숫자형)문자열 === 숫자
console.log('' === 0);// false

// !== 데이터 타입까지 완전히 같지 않다
console.log('' !== 0);// true