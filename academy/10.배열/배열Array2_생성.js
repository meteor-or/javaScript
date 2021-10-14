// 생성자 함수로 생성
const arr1 = new Array();
console.log(arr1);// [] 빈 배열

const arr2 = new Array(3);
console.log(arr2);// [<3 empty items>]

const arr3 = new Array('문자열', 2, arr1);
console.log(arr3);//[ '문자열', 2, [] ]