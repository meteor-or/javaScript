/*
  변수 variable 란?
  데이터의 저장공간으로 사용자가 이름을 붙여 사용.
  키워드 var와 함께 작성.
  var 키워드 변수에 대입된 값은 언제든지 변경 가능.
*/

// 변수 선언
var a;
console.log(a);// undefined. 변수가 선언만 되어 있고 값을 할당 받지 못했을 때

// 변수 선언 후 대입
var b;
b = 3;// 우변(3)을 좌변(a)에 '대입'하겠다는 의미!
console.log(b);
b = 10;// 값 재할당
console.log(b);

// 변수 선언과 동시에 대입
var c = 123;
console.log(c);

// 여러 개의 변수 선언 후 각 각의 값에 대입
var d,e, f, g;
d = 20; e = 30; f = 10.5; g = d + e - f;
console.log(f);
console.log(g);

// 한 줄에 여러 개의 변수를 선언함과 동시에 값 대입
var num = 22, numA=234, sum = num + numA;
console.log(sum);