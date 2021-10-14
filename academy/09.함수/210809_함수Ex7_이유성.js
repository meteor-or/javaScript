//입력한 언어에 따른 인사말을 출력하고 입력한 숫자 만큼 인사말 반복 출력


function hello(lang , num){

  

  switch(lang){
    case '한국어':
      msg = '안녕하세요' ; 
      break;
    case '영어':
      msg = 'hello' ;
      break;
    case '프랑스어':
      msg = '봉주르' ;
      break;
    default :
      msg = '해당 언어만 넣어주세요.';
}
  for (let i = 0; i < num; i++){
    console.log(msg);
  }
}


hello('한국어',2);
//안녕하세요?
//안녕하세요?
hello('영어',3);
hello('프랑스어',6);
