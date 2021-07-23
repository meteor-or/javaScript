// 논리 연산자: 두 개 이상의 값을 비교

// 상수 const 재정의, 재할당 되지 않음. 고유한 값으로 사용할 때
const a = 10, b = 20;

// 논리곱(and) &&
// A조건 && B조건: A의 조건과 B의 조건 모두 만족 시킬 때 true 반환
console.log(
  a >= 10 && b == 20
);// true
console.log(
  a > 10 && b == 20
);// false

// 논리합(or) ||
// A조건 || B조건: A의 조건과 B의 조건 중 하나만 만족시켜도 true 반환
console.log(
  a > 10 || b == 20
);// true

console.log('--- 논리부정 ! ---');
// 논리부정(not) !
// !A조건 : A 조건이 거짓이면 true 반환
console.log( b == 10 );// false
console.log(
  !(b == 10)// 상수 b는 10과 같다가 틀리면
);// true
console.log(
  !(a == 10)// 상수 a는 10과 같다가 틀리면 true, 상수 a는 10과 같다가 맞으면 false 반환
);// false
