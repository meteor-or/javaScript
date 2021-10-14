// $('#gnb').on('mouseenter',function() {
//   $('nav #gnb .gnb_sub').stop().slideDown();
// });
// $('#gnb').on('mouseleave',function() {
//   $('nav #gnb .gnb_sub').stop().slideUp();
// });

// $('#gnb').on({
//   'mouseenter': function() {
//     $('nav #gnb .gnb_sub').stop().slideDown();
//   },
//   'mouseleave': function() {
//     $('nav #gnb .gnb_sub').stop().slideUp();
//   }
// });

$('#gnb').hover(function(){// 마우스를 올렸을 때
  $('nav #gnb .gnb_sub').stop().slideDown();
}, function(){// 마우스가 벗어났을 때
  $('nav #gnb .gnb_sub').stop().slideUp();
});