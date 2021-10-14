// 배열을 매개변수로 받아 합을 구하시오

function sum(num){
let total = 0

  num.forEach( (item,idx) => total += num[idx]);
    return total;
  };


console.log(sum([6,10,3]));