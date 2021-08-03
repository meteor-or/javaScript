let i = 0;
while (true) {// 무한루프, 무한 반복. 반드시 빠져나올 수 있는 조건 설정이 필요
  console.log(i);
  i++;
  console.log('변수 i:', i);

  if(i == 5) {
    break;
  }
}