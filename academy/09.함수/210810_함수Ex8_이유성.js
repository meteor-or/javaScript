// 1~n까지의 합을 구하시오

function sum(num) {
  sum = 0
  for (let i = 0 ; i <= num; i++){
    sum += i;
  }
  return sum;
}

console.log(sum(3));