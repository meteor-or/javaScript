/*
  변수 variable (mutable)
  1. var
    - 함수 레벨 스코프 function level scope: 함수 내에서 선언된 변수는 함수 내에서만 유효.
      함수 내에서 선언되면 지역 변수, 함수 외부에서 선언되거나 키워드 생략시 전역 변수.
    - var 키워드 생략 가능
    - 변수 중복 선언 가능
    - 변수 호이스팅: 변수를 선언하기 전에 참조하는 것
    - var hoisting (move declaration from bottom to top)
    - has no block scope

  2. let
    - 블록 레벨 스코프 block level scope: {} 중괄호(함수, if문, for문, while 문...) 안에 선언된 변수는 블록 내부에서만 유효. 외부에서 참조할 수 없음.
    - 변수에 재할당 가능하나 같은 이름으로 재선언은 불가능.
*/

// 선언과 초기화를 함께 실행. 따라서 변수 선언 이전에 변수를 참조 -> 변수 호이스팅
console.log(a);//undefined 변수가 선언만 되어 있고 값을 할당 받지 못했을 때
var a = 100;
a = 200;// 변수 키워드 생략. 값 재할당
var a = 300;// 재선언. 중복 선언
console.log(a);

// console.log(b);참조 에러. 선언과 초기화가 분리 실행. 변수 초기화(메모리 공간확보)가 되지 않았기에 선언 이전에 변수를 참조 할 수 없음.
let b = 100;
// let b = 200; 같은 이름으로 재선언, 중복 선언 x
b = 300;// 값 재할당 가능
console.log(b);

/*
  const 상수 (immutable)
    - 변경 되지 않음
    - 재선언, 재할당 모두 불가능
    즉, 처음 선언하면 더이상 변경 할 수 없음. 다만 선언된 변수의 객체 내용은 변경 가능.
      - security
      - thread safety
      - reduce human mistakes
    - 반드시 선언과 동시에 대입
    - 블록 레벨 스코프
    
*/
const c = 100;
// c = 200; 에러, 재할당 불가능
console.log(c)



