//1부터 몇까지 더해야 3000을 넘길 수 있는지
// 1+2+3+4+5...->3000


let num = 1;
let sum = 0;

while(num < 3000) {
  sum += num;
  num++;
  
  if(sum > 3000){
    break;
  }
}

console.log('1부터 ' + num + '까지 더하면 ' + sum + '으로 3000이 넘는다.');