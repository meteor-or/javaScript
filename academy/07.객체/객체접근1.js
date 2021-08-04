// 객체 접근
let menu = {
  // '키' : '값'
  // 키에 문자열이나 심볼 외의 값은 문자열로 자동 변환
  // 값이 함수인 경우 메서드라고 함
  'title-one' : '떡볶이', //따옴표 필수 = 연산자가 있기 때문에
  title_two : '',// _ 작성시 따옴표 생략 가능
  serving : '1인분',
  1:5000,
  function: 1///
}
console.log(menu);

/* 자바스크립트 예약어(키워드)
  let, break, if, while, for, case, catch, eval, true, false, function, new, null, 
  undefinde, in, this., var, with, frturn, finally, delete, default, const, continue, 
  debugger...
*/