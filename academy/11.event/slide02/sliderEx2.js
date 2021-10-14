// 슬라이드 이미지
const slider_imgs = document.querySelectorAll('.slider_img');
const dots = document.querySelectorAll('.dot');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

  // 현재 보이는 슬라이드 이미지 인덱스 값
  let i = 0;
  // 기본값
  const reset = () => {// 익명함수 선언
    slider_imgs.forEach( (slide) => {
      slide.style.display = 'none';
    });
    dots.forEach( (dot) => {
      dot.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      dot.style.width = '16px';
      dot.style.height = '16px';
    });
  }

// 화살표
  const slideRight = () => {//익명함수 선언
    reset();

    if(i === slider_imgs.length - 1) {
      i = -1;
    }
    i++;// -1에서 0
    slider_imgs[i].style.display = 'block';
    dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    dots[i].style.width = '20px';
    dots[i].style.height = '20px';
  };
  arrow_right.addEventListener('click', slideRight);

  const slideLeft = () => {//익명함수 선언
    reset();

    if(i === 0) {
      i = slider_imgs.length;// i = 4
    }
    i--;
    slider_imgs[i].style.display = 'block';
    dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    dots[i].style.width = '20px';
    dots[i].style.height = '20px';
  };
  arrow_left.addEventListener('click', slideLeft);

// 페이지내이션
  dots.forEach( (dot, idx) => {
    dot.addEventListener('click', () => {
      reset();
      i = idx;
      slider_imgs[i].style.display = 'block';
      dots[i].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      dots[i].style.width = '20px';
      dots[i].style.height = '20px';
    });
  });

setInterval(slideRight, 1000);