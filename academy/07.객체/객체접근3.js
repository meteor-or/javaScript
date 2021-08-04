// 객체 접근 3

//매뉴 객체 생성: type, title, price
let drink = {
  type : 'coffee',
  title : 'Latte',
  price : 5000
}

// 메뉴 중 type 값을 출력
console.log(drink.type);//coffee
console.log(drink['title']);//Latte

//객체 프로퍼티 변경
drink['title'] = 'Americano'
console.log(drink['title']); //Amnericano