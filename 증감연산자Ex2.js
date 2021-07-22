let a = 9;
console.log('a', --a);// 8 먼저 감소 후 출력
console.log('a', --a);// 7 먼저 감소 후 출력
console.log('a', a--);// 7(6) 출력 후 연산

let b = 12;
console.log('b', b--);// 12(11) 출력 후 연산
console.log('b', b--);// 11(10)
console.log('b', --b);// 9 먼저 연산 후 출력

let c = 3;
console.log('c', ++c);// 4 먼저 연산 후 출력
console.log('c', c++);// 4(5) 출력 후 연산
console.log('c', --c);// 4 

let d = 12;
console.log(d--);// 12 출력 후 연산(11)
console.log(d);// 11
d--;// 11 출력 후 연산(10)
--d;// (10-1)연산 후 출력 9
--d;// (9-1)연산 후 출력 8
console.log(d--);// 8 출력 후 연산(7)

let e = 10;
e++;// 10 출력 후 연산(11)
e++;// 11 출력 후 연산(12)
e;// 12
e--;// 12 출력 후 연산(11)
e--;// 11 출력 후 연산(10)
console.log('e의 값은 ' + e + '입니다');// 10

let f = 20;
--f;// 20-1 연산 후 출력 19
f++;// 19 출력 후 연산(20)
++f;// 20+1 연산 후 출력 21
f--;// 21 출력 후 연산(20)
console.log('f의 값은 ' + f + '입니다.');// 20