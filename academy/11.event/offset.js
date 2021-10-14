/*
  offsetParent: position이 설정되어 있는 조상 요소. 없는 경우 body 반환
  offsetTop: offsetParent로부터 위에서 떨어져 있는 거리
  offsetLeft: offsetParent로부터 옆에서 떨어져 있는 거리
  offsetWidth: width + padding + border + scrollbar
  offsetHeight: height + padding + border + scrollbar
  clientWidth: width + padding
  clientHeight: height + padding
  ------------------- 여기까지는 읽기 전용

  scrollLeft, scrollTop: 스크롤바가 오른쪽, 아래로 움직임에 따라 가려지게 되는 요소의 너비와 높이
*/

const box1 = document.querySelector('#box1');
console.log('box1.offsetParent:', box1.offsetParent);// body
console.log('box1.offsetTop:', box1.offsetTop);// 580px = top(500) + margin-top(80)
console.log('box1.offsetLeft:', box1.offsetLeft);// 250px = left(150) + margin-left(100)

const box2 = document.querySelector('#box2');
console.log('box2.offsetParent:', box2.offsetParent);// body
console.log('box2.offsetTop:', box2.offsetTop);// 1000 = top(0) + margin-top(1000)
console.log('box2.offsetLeft:', box2.offsetLeft);// 400
console.log('box2.offsetWidth:', box2.offsetWidth);// 150 = width(150) + padding(0) + border(0) + scrollbar(0)
console.log('box2.offsetHeight:', box2.offsetHeight);// 150

const box3 = document.querySelector('#box3');
console.log('box3.offsetWidth:', box3.offsetWidth);// 228 = width(200) + padding(10+10) + border(4+4) + scrollbar(0)
console.log('box3.offsetHeight:', box3.offsetHeight);// 428
console.log('box3.clientWidth:', box3.clientWidth);// 220 = width(200) + padding(10+10)
console.log('box3.clientHeight:', box3.clientHeight);// 420 = height(400) + padding(10+10)