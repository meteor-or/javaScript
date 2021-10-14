//요소의 기본 성격 제거
$('a[herf='#']').on('click',function(e){
  e.preventDefault();
})

//배너
// $('').on('click',() => {
//   $().toggleClass('on');
// })


if($.cookie('modal')){// 내가 이름을 부여해 만든 쿠키의 값이 'none'과 같으면
  $('#banner').addClass('on');//배너숨김
}

function closeBanner() {
  if($('#limit').is(':checked')){//체크박스가 체크되면 체크박스 객체에 :Checked가 있으면참
    $.cookie('modal','none', { expirse: 1, path: '/'});// 쿠키의 이름과 값, 기간, 경로설정
  }
  $().toggleClass('on')
}

$('.close_btn')

//tab_slider
$('#tab_btn li').on('click',function(){
  let idx = $(this).index();
  $('#slider')
})