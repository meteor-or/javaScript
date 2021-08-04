// 객체 생성3
// 객체 리터럴과 Object 생성자 함수 방식 작성시 동일한 프로퍼티를 갖는 객체임에도 매번 같은 프로퍼티를 작성해야함.


let menu1 ={
  name : '카페라떼',
  price : 4500,
  size : 'Tall',
  order : function(){
    console.log(`주문하고 싶은 커피는 ${this.name}입니다.`);
  }
}
let menu2 ={
  name : '아메리카노',
  price : 4000,
  size : 'Tall',
  order : function(){
    console.log(`주문하고 싶은 커피는 ${this.name}입니다.`);
  }
}

//생성자 함수 사용시 템플릿처럼 사용 가능. 동일한 객체를 간단하게 여러개 생성 가능
function Menu(name, price, size){
  this.name = name;
  this.price = price;
  this.size = size;
  this.order = function(){
    console.log(`주문하고 싶은 커피는 ${this.name}와 ${this.size} 사이즈입니다.`);
  }
}

let coffee1 = new Menu('아메리카노', 4000);
console.log('coffee1', coffee1);
coffee1.order();

let coffee2 = new Menu('라떼',4500,'tall')
console.log('coffee2',coffee2);
coffee2.order();