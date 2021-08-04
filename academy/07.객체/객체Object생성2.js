//객체 선언과 동시에 빈 생성자 함수 대입
let menu = new Object();

//프로퍼티 추가
menu.name = 'ice latte';
menu.price = 4500;
menu.order = function() {
  console.log(`주문하고 싶은 커피는 ${this.name}입니다.`);
};

console.log(typeof menu);
console.log(menu);