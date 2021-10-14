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
