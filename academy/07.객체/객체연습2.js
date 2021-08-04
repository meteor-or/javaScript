// 우리집 반려동물 소개하기

function Favorite(title, num) {
  this.title = title;
  this.num = num;
  this.intro = function () {
    console.log(`우리 집 식물 이름은 ${title}이고 ${num}는 아직 살아 있습니다.`)
  }
}

let favorite = new Favorite('몬스테라', 5);
favorite.intro();
