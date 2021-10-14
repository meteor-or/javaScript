/* 
  return 
    함수 안에서 선언된 변수나 값의 경우 외부에서 접근 불가능.
    때문에 리턴 키워드를 사용하여 호출한 코드로 돌려 줌.
    함수 실행 후 결과를 다시 얻고자 사용.

  function fx() {
    실행문;
    return; 함수 강제 종료. 이 후 모든 문장은 실행되지 않음
    //return 반환값; 함수의 결과로 데이터 반환.
  }
*/

function fx() {
  // '수박'; undefined
  // return '수박'; 수박. 데이터 반환
  return '옥수수';// 앞의 return으로 인해 반환 x
}

console.log(fx());//함수 호출