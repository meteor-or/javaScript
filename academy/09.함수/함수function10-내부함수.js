// 내부 함수
// 내부 함수로 작성된 함수는 외부에서 접근할 수 없음

function parent() {// 부모 함수
  let a = 100;
  let b = 300;

  function child() {// 자식 함수. 내부 함수
    let b = 500;
    console.log(a);
    console.log(b);
  }
  child();// 부모 함수 내에서 호출
}

// child(); 함수 내부에서 정의된 함수는 기본적으로 외부에서 접근 불가
parent();// 100, 500