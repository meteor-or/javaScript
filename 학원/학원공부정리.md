# 자바스크립트 학원 공부 내용 정리

## javaScript란?

객체 기반/ 클라이언트 스크립트/ 동적 타입의 프로그래밍 언어

### 웹에서의 역할

1. 사용자의 입력 및 계산. html폼은 입력 창만 제공할 뿐 키나 마우스의 입력과 계산은 오직 자바스크립트로만 처리 가능
2. 웹페이지 내용 및 모양의 동적 제어
3. 브라우저 제어. 브라우저의 크기나 모양 변경, 새 윈도우나 탭 열기, 다른 웹 사이트 접속, 브라우저의 히스토리 제어 등 브라우저의 작동을 제어하는 데 활용
4. 웹 서버와의 통신
5. 웹 어플리케이션 작성 : html5는 캔버스, 로컬 및 세션 스토리지, 위치 정보 서비스 등
   자바스크립트 언어로 활용할 수 있는 많은 기능(API)를 제공하므로, 웹 브라우저에ㅔ서 실행되는 다양한 웹 어플리케이션을 개발할 수 있다.

## 자바스크립트 코드의 위치

1. HTML 태그의 이벤트 리스너 속성에 작성  
   `<img scr= "apple" alt="img" onclick="this" src="banana.png">`
2. <script> </script> 내 작성
3. 자바스크립트 코드를 별도 파일에 작성

- DOM을 다 불러온 위치 : `<script src="script.js"></script>`
- DOM을 불러오기 전 위치 : `<script defer src="script.js"></script>`

### css보다 우선순위가 높다.

## 식별자

식별자란 자바스크립트 개발자가 자바스크립트 프로그램 변수, 상수, 함수에 붙이는 이름이다

- 첫 번째 문자 : 알파벳, 언더스코어(\_),$문자만 사용 가능
- 두 번째 문자 : 알파벳, 언더스코어, 0~9, $ 사용 가능
- 대소문자 구분
- 키워드(예약어) 사용 불가
- 가독성을 높이기 위해 헝가리언 이름(낙타등 표기법, 카멜표기법) 규칙 사용 권장
- 공백 문자를 포함할 수 없다.

### 식별자 종류

1. 식별자 뒤에 괄호 없음

- 단독으로 사용시 변수 `input`
- 다른 식별자와 사용시 속성 `Math.PI`

2. 식별자 뒤에 괄호 있음

- 단독으로 사용시 함수 `alert('hello')`
- 다른 식별자와 사용시 메서드 `Math.abs(-273)`

## 다이얼로그

1. prompt('메시지','디폴트 입력값');  
   입력창. 다이얼로그를 출력하고 사용자로부터 문자열을 입력받아 리턴  
   `prompt('입력 값을 작성하시오.','이 곳에 작성하시오.')`
2. comfirm('메시지');  
   확인창. 메시지와 확인 ok/취소 cancel 버튼을 가진 다이얼로그 출력  
   `confirm('확인창입니다.');`
3. alert('메시지');  
   경고창. 다이얼로그를 출력하여 단순히 메시지를 전달  
   `alert('알림창, 경고창입니다.')`

## 데이터타입

자바스크립트 언어로 다룰 수 있는 데이터의 종류

### 데이터 타입의 종류

1. 기본Primitive

- 문자열 타입 : '좋은 세상', 'a', '123', '2+4'
- 숫자 타입 : 42, 3.14, 정수, 실수를 구분하지 않는다.
- 논리 타입(boolean) : true(1) 또는 false(0)
- 함수 타입 : function(){}
- 심볼 타입 : 변경 불가능한 자료형으로 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용(ES6+)
- null : 값 없음. 아무것도 참조하지 않음을 표시. 의도적으로 변수에 값이 없다는 것을 명시할 때 사용.
- undefined : 선언하지 않은 변수 또는 초기화하지 않았을 때의 값.

## 변수

### 1. var

- 재선언 O, 재할당 O
- 함수 레벨 스코프 function level scope: 함수 내에서 선언된 변수는 함수 내에서만 유효.
  함수 내에서 선언되면 지역 변수, 함수 외부에서 선언되거나 키워드 생략시 전역 변수.
- var 키워드 생략 가능
- 변수 호이스팅: 변수를 선언하기 전에 참조하는 것

```javascript
// 선언과 초기화를 함께 실행. 따라서 변수 선언 이전에 변수를 참조 -> 변수 호이스팅
console.log(a); //undefined 변수가 선언만 되어 있고 값을 할당 받지 못했을 때
var a = 100;
a = 200; // 변수 키워드 생략. 값 재할당
var a = 300; // 재선언. 중복 선언
console.log(a);
```

### 2. let

- 재선언 X, 재할당 O
- 블록 레벨 스코프 block level scope: {} 중괄호(함수, if문, for문, while 문...) 안에 선언된 변수는 블록 내부에서만 유효. 외부에서 참조할 수 없음.
- 변수에 재할당 가능하나 같은 이름으로 재선언은 불가능.

```javascript
// console.log(b);참조 에러. 선언과 초기화가 분리 실행. 변수 초기화(메모리 공간확보)가 되지 않았기에 선언 이전에 변수를 참조 할 수 없음.
let b = 100;
// let b = 200; 같은 이름으로 재선언, 중복 선언 x
b = 300; // 값 재할당 가능
console.log(b);
```

### 3. const 상수

- 재선언 X, 재할당 X
- 즉, 처음 선언하면 더이상 변경 할 수 없음. 다만 선언된 변수의 객체 내용은 변경 가능.
- 반드시 선언과 동시에 대입
- 블록 레벨 스코프

```javascript
const c = 100;
// c = 200; 에러, 재할당 불가능
console.log(c);
```

## 호이스팅 hoising

var 선언문이나 function 선언문 등 모든 선언문이 해당 영역의 앞으로 옮겨진 것처럼 동작하는 특성.

```javascript
console.log(a); // undefined
var a = 123;
console.log(a); // 123
{
  var a = 456; //let 키워드 사용 x
}
console.log(a); // 456 블록 레벨 스코프 내의 변수 var a는 전역변수로 적용.
// { let a = 456; } 인 경우 123 출력. 블록 레벨 스코프의 영역을 가짐
```

## 연산자의 종류

### 1. 산술 연산자

덧셈, 뺄쌤보다 곱셈, 나눗셈에 우선 순위가 있으며 특정 부분을 우선으로 두고 싶으면 괄호를 사용

1. `=` , 대입, a = b b값을 a에 대입
2. `+` , 더하기, 1 + 1 = 2
3. `-` , 빼기, 4 - 2 = 2
4. `*` , 곱하기, 3 \* 2 = 6
5. `/` , 나누기, 4 / 2 = 2
6. `%` , 특정 값을 나눈 후의 나머지, 3 % 2 = 1

### 2. 문자열 연산자

1. 문자열 더하기 연산자

```javascript
num = 11 + 22; // 숫자 + 숫자 = 숫자 33
num = "재미있는 " + "즐거운 " + "자바스립트!!!"; // 문자열 + 문자열 + 문자열 = string
num = "11" + 22; // 문자열 + 숫자 = 문자열 1122
num = 11 + "22"; // 숫자 + 문자열 = 문자열 1122
```

2. 문자열 빼기 연산자

```javascript
num = 11 - 22; // 숫자 - 숫자 = 숫자 -11
num = "오늘은 " - "신나는 " - "목요일입니다!"; // 문자열 - 문자열 - 문자열 = NaN
num = "11" - 22; // 문자열 - 숫자 = -11 숫자(숫자형 문자열의 경우 숫자로 자동변환)
num = 11 - "22"; // 숫자 - 문자열 = -11 숫자
```

3. 문자열 곱하기 연산자

```javascript
num = 11 * 22; // 숫자 * 숫자 = 숫자
num = "재미있는 " * "자바스크립트!!"; // 문자열 * 문자열 = NaN(Not a Number)
num = "11" * 22; // 문자열 * 숫자 = 242 숫자
num = "11" * "22"; // 문자열 * 문자열 = 242 숫자
```

4. 문자열 나누기 연산자

```javascript
num = 11 / 22; // 숫자 / 숫자 = 숫자
num = "재미있는 " / "자바스크립트!!"; // 문자열 / 문자열 = NaN(Not a Number)
num = "11" / 22; // 문자열 / 숫자 = 242 숫자
```

### 3. 비교 연산자

- <, >, ==, <=, >=, !=
- 두 개 이상의 값 비교.
- 주로 조건문에 많이 사용되며 결과 값은 true(1)와 false(0)으로 출력.
- 좌항 기준.

```javascript
let i;
// 좌변 = 우변(좌항<우항)
i = 5 < 4; // ~보다 작다. 좌항(5)은 우항(4)보다 작다. 거짓 == false == 0
i = 5 > 4; // ~보다 크다. 좌항(5)은 우항(4)보다 크다. 참 == true == 1
i = 5 == 4; // 같다. 좌항(5)은 우항(4)과 같다. false
i = 5 != 4; // 같지 않다. 좌항(5)과 우항(4)은 같지 않다. true

i = 5 <= 4; // 작거나 같다. 5는 4보다 작거나 같다. false
i = 5 >= 4; // 크거나 같다. 5는 4보다 크거나 같다. true

console.log(i);

console.log(1 == true); // true
console.log("345" == 345); // true 숫자형 문자열이 자동 변환되어 비교
console.log("15" > "12"); // true 숫자형 문자열이 자동 변환되어 비교
console.log("015" > "12"); // false

// (40 > 25) 비교값 -> true
// true(1) > 10 -> false
console.log(40 > 25 > 10); // false

console.log(0 == false); // true
console.log("" == false); // true
console.log("" == 0); // true
console.log("" == null); // false
console.log("" == undefined); // false

console.log("korea" > "america"); // true 11(k) > 1(a)
console.log("한글" > "영어"); // true 14(ㅎ) > 8(ㅇ)
console.log("한글" > "zoo"); // true(한글 우선) 14 > 26

// === 데이터 타입까지 완전히 같다(엄격한 비교)
console.log("1234" === 1234); // false (숫자형)문자열 === 숫자
console.log("" === 0); // false

// !== 데이터 타입까지 완전히 같지 않다
console.log("" !== 0); // true
```

### 4. 타입 연산자

데이터 타입을 문자열로 반환

```javascript
console.log(typeof ""); // string
console.log(typeof 1); // number
console.log(typeof NaN); // number. Not a Number
console.log(typeof true); // boolean
console.log(typeof []); // object
console.log(typeof new String()); // object
console.log(typeof function () {}); // function
console.log(typeof undefined); // undefined
console.log(typeof null); // object. 설계 오류
```

### 5. 증감 연산자

변수 값을 1씩 증가 시키거나 감소 시킴

1. `++a`, 전위 증가 연산자, 변수를 불러오기 전에 1 증가 후 출력
2. `a++`, 후위 증가 연산자, 변수를 먼저 출력 후 1 증가

```javascript
let a = 20;
console.log(a++); // 20(21)
console.log(a++); // 21(22)
console.log(a++); // 22(23)

let b = 5;
console.log(b); // 5
console.log(++b); // 6 먼저 더해진 후 출력
console.log(++b); // 7
console.log(++b); // 8

let c = 5;
console.log(++c); // 6 먼저 더하고 출력
console.log(++c); // 7
console.log(c++); // 7(8) 기존 c값을 출력 후에 1증가
```

### 6. 산술대입 연산자

'=' 를 기준으로 오른쪽의 숫자만큼 사칙 연산하여 왼족의 변수에 새로운 데이터 값으로 갱신

1. `+=` , 더해서 대입, var a = 5; a+=5; 결과값 : 10
1. `-=` , 빼서 대입, var a = 5; a-=5; 결과값 : 0
1. `*=` , 곱해서 대입, var a = 5; a\*=5; 결과값 : 25
1. `/=` , 나눠서 대입, var a = 5; a/=5; 결과값 : 1
1. `%=` , 나머지를 대입, var a = 5; a%=5; 결과값 : 0

### 7. 논리 연산자

두 개 이상의 값을 비교

1. 논리곱(and) &&  
   A의 조건과 B의 조건 모두 만족 시킬 때 true

```javascript
const a = 10,
  b = 20;
console.log(a >= 10 && b == 20); // true
console.log(a > 10 && b == 20); // false
```

2. 논리합(or) ||  
   a조건과 B의 조건 중 하나만 만족시켜도 true 반환

```javascript
const a = 10,
  b = 20;
console.log(a > 10 || b == 20); // true
```

3. 논리부정(not) !  
   !A조건 : A 조건이 거짓이면 true 반환

```javascript
const a = 10,
  b = 20;
console.log(b == 10); // false
console.log(
  !(b == 10) // 상수 b는 10과 같다가 틀리면
); // true
console.log(
  !(a == 10) // 상수 a는 10과 같다가 틀리면 true, 상수 a는 10과 같다가 맞으면 false 반환
); // false
```

## 데이터 타입 변환

### 1. 문자열 타입 변환

```javascript
// String 생성자 함수를 이용한 변환
console.log(String(1)); // '1' 숫자형 문자열
console.log(String(NaN)); // 'NaN' 문자열
console.log(String(true)); // 'true'
console.log(String(false)); // 'false'

// Object.prototype.toString 메서드 이용
console.log((1).toString()); // '1' 숫자형 문자열
console.log(NaN.toString()); // 'NaN' 문자열
console.log(true.toString());
console.log(false.toString());

// 더하기 연산자를 이용
console.log(1 + "");
console.log(NaN + "");
console.log(true + "");
console.log(false + "");

let x = 10; // 숫자 데이터 타입
let str1 = x.toString();
console.log(typeof x, typeof str1); // number string

let y = true;
let str2 = y + "";
console.log(typeof y, typeof str2); // string
```

### 2. 숫자 타입 변환

```javascript
// Number 생성자 함수 이용
console.log(Number("0")); // 0
console.log(Number("-1")); // -1
console.log(Number("10.55")); // 10.55
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("문자열")); // NaN

// parseInt, parseFloat 함수 이용(문자열만 변환 가능)
console.log(parseInt("0")); // 0
console.log(parseInt("-1")); // -1
console.log(parseInt("10.22")); // 10 정수
console.log(parseFloat("10.22")); // 10.22 실수

// + 단항 연결 연산자 이용
console.log(+"0"); // 0
console.log(+"-1"); // -1
console.log(+"10.53"); // 10.53
console.log(+true); // 1
console.log(+false); // 0

// * 산술 연산자 이용
console.log("0" * 1); // 0
console.log("-1" * 1); // -1
console.log("10.11" * 1); // 10.11
console.log(true * 1); // 1
console.log(false * 1); // 0
```

### 3. 불리언 타입 변환

```javascript
// Boolean 생성자 함수 이용
console.log(Boolean("x")); // true
console.log(Boolean("")); // false
console.log(Boolean("false")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
// 객체 타입
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// ! 부정 논리 연산자를 두 번 이용
console.log("-- !! -- ");
console.log(!!"x"); // true
console.log(!!""); // fasle
console.log(!!0); // fasle
console.log(!!1); // true
```

## 제어문

if조건문, switch선택문, for반복문, while반복문

### 1. block문

- block statement, compound statemet
- 중괄호{}로 묶은 것.
- 자바스크립트는 블록문을 하나의 단위로 취급.
- 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수 선언문 등에서 사용.

```javascript
// 블록문
{
  var a;
  let b;
}

// 제어문(조건문, 반복문....)
var x = 0;
while (x < 10) {
  x++;
}

// 함수 선언문
function sum() {
  x, y;
}
```

### 2. 조건문

1. if 조건문
   주어진 조건에 따라 참과 거짓으로 구분. true일 때 실행  
   `if(조건){//조건이 참인 경우, 실행문;//실행}`

```javascript
if (111 < 100) {
  // 조건이 거짓
  alert("참입니다."); // 실행 x
}
if (11 < 22) {
  // 조건이 참인 경우
  alert("11<22은 참입니다."); // 실행
}
if (0) {
  // 0 == false
  alert("0은 알림창이 뜹니다"); // 실행 x
}
if (1) {
  // 1 == true
  alert("1은 알림창이 뜹니다"); // 실행
}

const num = 100;
if (num >= 99) {
  alert(num + "은/는 99보다 큽니다.");
}
if (num != 99) {
  // num과 99는 같지 않다
  alert(num + "와/과 99는 같지 않습니다.");
}
```

예시1

```javascript
  // 입력창에 하루 걸음 수를 입력 받아 5000보 이상의 경우, 알림창으로 칭찬해 주세요.
  let walk = prompt('하루에 걷는 걸음 수를 입력하세요.');

  if(walk >= 5000) {//5000보 이상의 경우,
    alert('칭찬합니다.');//출력
```

2. if-else 조건문

```javascript
if (조건) {
  // 조건이 참인 경우
  실행문; //실행
} else {
  // 위으 조건이 모두 거짓인 경우
  실행문; // 실행
}
```

- 예시1

```javascript
// 입력 받은 값(5)이 10보다 작거나 같으면 '[입력한 값(5)]이 10보다 작거나 같습니다.'출력
// 입력 받은 값(20)이 10보다 크면 '[입력한 값(20)]이 10보다 큽니다.'출력

let num = prompt("숫자를 입력하세요.");

if (num <= 10) {
  //입력 받은 값이 10보다 작거나 같으면
  alert("입력한 값 " + num + "은/는 10보다 작거나 같습니다.");
} else {
  //위의 조건을 모두 만족시키지 못했으면
  alert("입력한 값 " + num + "은/는 10보다 큽니다.");
}
```

- 예시2

```javascript

```

### 3. 반복문
