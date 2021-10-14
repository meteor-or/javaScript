// indexOf 배열 내장함수.
// 배열 내에서 원소의 위치 확인

const coffee = ['아메리카노','카페라떼','카페모카','바닐라 라떼'];
const index = coffee.indexOf('바닐라 라떼');
console.log(index);// 3

// findindex 객체이거나 조건으로 찾고자 할 때 사용.
const tool = [
  {//0
    id: 1,
    text: '포토샵',
    done: true
  },
  {//1
    id: 2,
    text: '일러스트',
    done: true
  },
  {//2
    id: 3,
    text: 'XD',
    done: true
  },
  {//3
    id: 4,
    text: 'vscode',
    done: false
  }
]
let idx1 = tool.indexOf(3);
console.log(idx1);// -1 일치하는 값 없음

// let idx2 = tool.findIndex(function(num) {
//   num.id === 3
// });
// 객체의 인덱스 번호를 알려줌
let idx2 = tool.findIndex(num => num.id === 3 );
console.log(idx2);// 2

// find() 값 반환
const idx3 = tool.find( num => num.done === true );
console.log(idx3);

const idx4 = tool.find( num => num.done === false );
console.log(idx4);