// 구구단 2~9단 출력(중첩문)

let i = 2;
let j = 1;
let sum = 0;

while (i <= 9) {
  while(j <= 9){
    sum = i * j;
    console.log(i + '*' + j + '=' + sum);
    j++;
  }
  i++;
  j=1;
}


