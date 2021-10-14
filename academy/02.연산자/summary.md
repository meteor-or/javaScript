# 연산자Operator

### 1. 산술 연산자 string concatenation

덧셈, 뺄쌤보다 곱셈, 나눗셈에 우선 순위가 있으며 특정 부분을 우선으로 두고 싶으면 괄호를 사용

1. `=` , 대입, a = b b값을 a에 대입
2. `+` , 더하기, 1 + 1 = 2
3. `-` , 빼기, 4 - 2 = 2
4. `*` , 곱하기, 3 \* 2 = 6
5. `/` , 나누기, 4 / 2 = 2
6. `%` , 특정 값을 나눈 후의 나머지, 3 % 2 = 1

### 2. 문자열 연산자 Numeric operators

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

### 3. 비교 연산자 (Comparison operators)

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

### 5. 증감 연산자(Increment and decrement operators)

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

### 6. 산술대입 연산자 (Assignment operator)

'=' 를 기준으로 오른쪽의 숫자만큼 사칙 연산하여 왼족의 변수에 새로운 데이터 값으로 갱신

1. `+=` , 더해서 대입, var a = 5; a+=5; 결과값 : 10
1. `-=` , 빼서 대입, var a = 5; a-=5; 결과값 : 0
1. `*=` , 곱해서 대입, var a = 5; a\*=5; 결과값 : 25
1. `/=` , 나눠서 대입, var a = 5; a/=5; 결과값 : 1
1. `%=` , 나머지를 대입, var a = 5; a%=5; 결과값 : 0

### 7. 논리 연산자 (logic operator)

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
