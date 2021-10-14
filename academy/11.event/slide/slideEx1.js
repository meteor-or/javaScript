let imgs = ['512D6D/fff?text=img1','F8485E/fff?text=img2','EEEEEE/000?text=img3','00C1D4/000?text=img4'];

let gallery = document.querySelector('#gallery');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let i = 0;//숫자로 초기화. imgs의 인덱스 번호

prev.addEventListener('click', function(){
  console.log(i);
  if (i <= 0) {
    i = imgs.length;
    --i;
  } else {
    --i;
  }
  gallery.src= 'https://via.placeholder.com/500x250/' + imgs[i];
});

next.addEventListener('click', function(){
  ++i;
  if ( i >= imgs.length) {
    i = 0;
  }
  gallery.src= 'https://via.placeholder.com/500x250/' + imgs[i];
});