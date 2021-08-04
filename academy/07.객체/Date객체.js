// Date 객체: 날짜와 시간 인스턴스를 생성하는 내장객체이자 생성자 함수

const date = new Date();
console.log(date);

const today = new Date();
console.log(new Date().getFullYear());//년도
console.log(today.getFullYear());// 2021

console.log(today.getMonth() + 1);// 월 0~11까지 반환. 1월->0
console.log(today.getDate());// 날짜 1~3까지 반환
console.log(today.getDay());// 요일 0~6까지 반환
console.log(today.getHours());// 시간 0~23
console.log(today.getMinutes());// 분 0~59
console.log(today.getSeconds());// 초 0~59

// 문자열로 날짜 반환
const d = new Date('2021/8/3/12:17');
console.log(d.toString());// Tue Aug 03 2021 12:17:00 GMT+0900 (대한민국 표준시)
console.log(d.toDateString());// Tue Aug 03 2021
console.log(d.toTimeString());// 12:17:00 GMT+0900 (대한민국 표준시)
