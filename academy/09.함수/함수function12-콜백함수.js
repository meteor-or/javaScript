//  콜백 함수는 콜백 큐Que에 들어가 있다가 해당 이벤트가 발생하면 호출.
function homework() {
  let subject = 'js';

  // 일정 시간 후 한 번만 실행 setTimeout(함수,시간);
  setTimeout(function () {
    console.log('재미있는', subject);
  }, 2000);//js에서는 1s == 1000

}

homework();