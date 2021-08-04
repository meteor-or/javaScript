// 객체 접근 4

let drink = {
  type : 'coffee',
  title : 'Latte',
  price : 5000

}

console.log(drink.size); //undefined

//drink.size = 'tall';
drink['size'] = 'Venti';
console.log(drink.size);

// 프로퍼티 삭제
console.log(drink.price);// 5000
delete drink.price;
console.log(drink.price);// undefined

delete drink; // 프로퍼티 키만 삭제. 실행 x
console.log(drink); //{ type: 'coffee', title: 'Latte', size: 'Venti' }