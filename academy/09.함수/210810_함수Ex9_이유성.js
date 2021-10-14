// 구구단 출력
function output(num, limit) {
  console.log(`-- ${num}단 --`);
  for (let i=1; i<=limit; i++) {
    let sum = num * i;
    console.log(`${num} * ${i} = ${sum}`);
  }
}

// 3단의  6개만 출력 3*1=3, 3*2=6... 3*6=18;
output(3,6);
// 6단의 4개만 출력
output(6,4);