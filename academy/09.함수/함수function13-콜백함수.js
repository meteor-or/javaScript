// 1부터 더하여 합이 20이 넘으면 알림
function check(msg) {
  let i = 0;
  let sum = 0;

  // ()의 값이 참인 동안 반복 실행되기 때문에 빠져나올 수 있는 조건 필수
  while (true) {
    i++;
    sum += i;// 변수 sum에 변수 i를 더해 다시 sum에 재할당
    if(sum > 20){
      msg();//함수 호출
      break;
    }
  }
}

let txt = function () {
  console.log('합이 20을 넘었습니다.');
} 

check(txt);// 익명함수를 매개 변수로 사용하여 함수 호출

check(function(){
  console.log('합이 20을 넘었습니다.');
});
