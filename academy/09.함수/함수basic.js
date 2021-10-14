// 함수 선언
// 함수 호출

//함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}
// 지금은 함수를 선언만 한거임

function add(a, b){
  const sum = a + b;
  return sum;
}


//함수 호출


doSomething(add);
