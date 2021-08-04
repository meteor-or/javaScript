// 반려 동식물 소개하기

function pet(name,age){
  this.name = name;
  this.age = age;
  this.info = function(){
      console.log(`반려동물의 이름은 ${this.name}이며 나이는 ${this.age}살입니다.`)
  }
}


let cute = new pet('탄이',5);
cute.info();