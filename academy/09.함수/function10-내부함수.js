function parent (){
  let a = 100;
  let b = 300;

  function child (){//자식 함수. 내부 함수
    let b = 500;
    console.log(a);
    console.log(b);
  }
  child();//부모 함수 내에서 호출
}


parent(); // 100,500