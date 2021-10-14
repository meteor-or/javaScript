// 입력한 언어에 따른 인사말을 출력하세요

function hello(lang){
  switch(lang){
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('hello');
      break;
    case '프랑스어':
      console.log('봉주르');
      break;
}}
function hello(lang){
  let msg = '안녕하세요?';

  if (lang == '영어'){
    msg = 'hello?';
  } else if (lang == 프랑스){
    msg = '봉주르';
  }
}
hello('한국어');
hello('영어');
hello('프랑스어');
