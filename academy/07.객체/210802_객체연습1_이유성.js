// 자기 소개 객체 만들기
// 콘솔 : 제 이름은 xxx이며 제 취미는 xxx입니다.

let introduce1 = {
  name : '이유성',
  hobby : '게임',
  mynamehobby : function(){
    console.log(`제 이름은 ${this.name}이며 제 취미는 ${this.hobby}입니다.`);
  }
}

introduce1.mynamehobby();

let introduce2 = new Object();

//프로퍼티 추가
introduce2.name = '이유성';
introduce2.hobby = '게임';
introduce2.mynamehobby = function(){
  console.log(`제 이름은 ${this.name}이며 제 취미는 ${this.hobby}입니다.`);
}


introduce2.mynamehobby();