// 객체 Object 생성 1
/*
객체 Object란?
  변수와 함수가 모여 만든 변형 가능한 속성들의 집합
  객체 종류: 코어 객체(Array, Math, Date, Number, String....), DOM 객체, BOM 객체 ...

  프로퍼티property -> 키key: 값value
*/  

// 객체 리터럴로 (빈 객체) 생성.
let obj = {};
console.log(typeof obj);

// 프로퍼티 추가
obj.name = '이름';
obj.hobby = '취미';

console.log('객체 obj의 name은 ' + obj.name + '의 값을 가진다.');
console.log('객체 obj의 hobby는 ' + obj.hobby + '의 값을 가진다.');
console.log(obj);//{ name: '이름', hobby: '취미' }

let address = {
  '이름' : '이젠',
  '주소' : '경기도 수원시 팔달구'
};
console.log(typeof address);

address.연락처 = '031-412-1234'; //객체 프로퍼티 추가

console.log(address.이름);
console.log(address.주소);
console.log(address.연락처);
console.log(address);

address.intro = function() {
  //console.log('저는', this.주소, '에 삽니다.');
  console.log('저는 ${this.주소}에 삽니다.');
}
address.intro();