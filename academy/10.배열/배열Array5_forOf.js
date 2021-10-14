// for of 반복문. 배열을 다룰 때 주로 사용
const num = [10,20,30,40,50];

for (let i=0; i<num.length; i++) {
  console.log(num[i]);
}

console.log('------for of');
for (let idx of num) {
  console.log(idx);
}