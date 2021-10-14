// 익명
(function(a){
  console.log('a:',a);// 2
})(2);

// 기명(선언)
(function fxName(x){
  console.log('x:', x * x);// 16
})(4);

(function fxName(x, y){
  console.log('x * y:', x * y);// 12
})(3,4);

// 변수 대입
(myFx = function (x, y) {
  console.log('x + y:', x + y);// 재미있는! JS!
})('재미있는! ', 'JS!');

myFx('ㅎㅎㅎ','ㅋㅋㅋㅋ');