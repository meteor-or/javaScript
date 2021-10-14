/* 
  매개변수
    함수 외부에서 내부로의 접근은 매개변수를 통해 값 전달
  function fx(parameter1, 인자2, .., 매개변수n) {
    실행문
  }
*/

function num(x) {
  console.log( x + 10 );
}

num(10);
num(5);
num(12345687251);