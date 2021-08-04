// 객체 접근 2

let menu = {
  'title-one' : 'Americano',
  'type' : 'coffee',
  price: 5000,
  1: 10
}

console.log(menu);

//console.log(menu.title);
//console.log(menu.[title-one]);
console.log(menu['title-one']);// coffee
console.log(menu['type']); // coffee

console.log(menu['1']);// 10
console.log(menu[1]);// 10 menu[1] -> menu['1']
//console.log(menu.1); 알 수 없는 구문 오류

console.log(menu.price);//5000
console.log(menu['price']);//5000

console.log(menu.function);// 1
console.log(menu['function']);// 1. 예약어인 경우 []로 작성 권장