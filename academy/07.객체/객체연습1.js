// 자기 소개 객체 만들기
// 콘솔: 제 이름은 xxx이며 제 취미는 xxx 입니다.
// let, new 2가지 방법
let intro1 = {
  userName: '김미리',
  hobby: '독서',
  myInfo: function() {
    console.log(`제 이름은 ${this.userName}이며 취미는 ${this.hobby} 입니다.`);
  }
}
console.log(intro1);// 
// console.log()
intro1.myInfo();

let intro2 = new Object();
intro2.userName = '김미리';
intro2.hobby = '산책';

console.log(intro2);
console.log(intro2.userName);
intro2.myInfo = function () {
  console.log(`제 이름은 ${this.userName}이며 취미는 ${this.hobby} 입니다.`);
};

intro2.myInfo();