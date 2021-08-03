/*
  let 식별자명 = 초기값;
  while (조건) {조건: 참과 거짓의 조건으로 참인 동안 실행
    조건이 만족될 때까지의 실행문;
    증감식;
  }
*/

/*
for(let i=1; i<=10; i++) {
  console.log(i);
}
*/

let i = 1;
while (i <= 10) {// 변수 i의 값이 10보다 작거나 같을 때까지 실행
  console.log(i);
  i++;//증감의 값
}

let count = 0;
while (count < 6) {
  console.log(count);
  count++;
  console.log('count', count);
}