// .getDay(); 해당 요일(0~6)을 글자로 반환;
// 오늘의 요일을 글자로 출력

const today = new Date()
console.log(today);

const dayName = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

console.log(`${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${dayName[today.getDay()]}`);
