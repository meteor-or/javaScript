//객체를 생성하는 함수

// 기존 함수와 동일한 방법으로 생성자 함수 선언
// 단, new 키워드를 붙여 생성자 함수로 동작되게 함.
// 일반 함수와 혼동이 될 수 있기 대문에 첫글자는 반드시 대문자.
function Menu(title, price){
  let coffee = true; //지역변수. 외부에서 확인되지 않음
  this.title = title; 
  this.price = price;
  this.order = function() {
    console.log(`주문하고 싶은 커피는 ${this.title}입니다.`);
  }
}

let menu = new Menu ('Americano', 4000); //생성자 함수 Menu 호출
console.log(menu);
menu.order();