// 불리언 타입 변환

// Boolean 생성자 함수 이용
console.log(Boolean('x'));// true
console.log(Boolean(''));// false
console.log(Boolean('false'));// true
console.log(Boolean(0));// false
console.log(Boolean(1));// true
console.log(Boolean(NaN));// false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
// 객체 타입
console.log(Boolean({}));// true 
console.log(Boolean([]));// true 

// ! 부정 논리 연산자를 두 번 이용
console.log('-- !! -- ');
console.log(!!'x');// true
console.log(!!'');// fasle
console.log(!!0);// fasle
console.log(!!1);// true