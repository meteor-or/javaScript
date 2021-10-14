/*
$('객체').method(); css에서 사용된 선택자의 종류 전부 객체로 사용 가능

jQuery('*'); 전체 선택자 탐색
$('#id'); 아이디 선택자 탐색
$('.class');
$('type');
$('#id > .class, type type'); 다중 선택자(자식선택자, 하위선택자)
$('type:nth-child()');
$('type[attribute = value]');
$(':hover');
...

탐색 메서드();
$().parent(); 기준 객체의 직계 부모 노드 탐색
$().parents(); 기준 객체의 모든 부모 노드 탐색
$().children(); 기준 객체의 모든 직계 자식 노드 탐색
$().siblings(); 기준 객체의 형제 노드 탐색
$().prev(); 기준 객체의 바로 이전 형제 노드 탐색
$().next(); 기준 객체의 바로 다음 형제 노드 탐색
$().prevAll(); 기준 객체 이전 형제 노드 '모두' 탐색
$().nextAll(); 기준 객체 다음 형제 노드 '모두' 탐색
$().find(매개변수); 기준 객체와 일치하는 하위 노드 탐색. 매개 변수 없이 사용되지 않음
$().filter(); 기준 객체와 일치하는 노드 탐색(걸러냄)
*/

// 문서 준비 이벤트 window.onload = function() {}
// $(document).ready(function(){});

$(document).ready(function(){
  //$().css('속성','값');
  // document.body.style.backgroundColor = '#efefef';
  $('body').css('background-color','#efefef');
  //$().css({'속성':'값','속성':'값','속성':'값'});
  $('body *').css({'border':'6px solid #999', 'padding':'10px', 'margin': 10});

  $('a').parent();// a의 직계 부모(li) 탐색
  // method chainig 여러 개의 메서드를 연결
  $('a').parent().css('border-color','red');
  // $('a').css('border-color','red').parent(); a에 css를 적용 뒤 부모 탐색

  // $('a').parents().css('border-style','dotted'); 매개변수를 작성하지 않는 경우 같은 라인의 모든 부모를 탐색. 즉 body, html에도 탐색
  $('a').parents('#wrap').css('border-style','dotted');

  $('.container').children();// .container의 자식들 탐색. 매개변수 미작성시 같은 라인의 모든 직계 자식 노드 탐색
  // $('.container').children().css('border-color','#000');
  $('.container').children('h1').css('border-color','#000');

  $('li.part').siblings();// li.part의 형제 관계 탐색
  $('li.part').siblings().css('background-color','lightblue');
  $('li.part').siblings('li:last-child').children().css('text-decoration','none');// == a

  $('.p2').prev();// .p2의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css('background-color','salmon');

  $('.p1').next();// .p1의 뒤에 작성된 형제 노드 탐색
  $('.p1').next().css({'background-color':'orange', fontWeight:'bold', fontSize:26 });

  $('.p2').prevAll();// .p2 앞에 작성된 형제 노드 전부 탐색
  $('.p2').prevAll().css('border-style','dashed');

  $('.p1').nextAll().css('border-width','2px');// .p1 뒤에 작성된 형제 노드 전부 탐색

  $('#header').siblings('ul').children('li').children().css({ backgroundColor:'#000', color:'#fff', fontWeight:'bold' })

  $('#header').find('p');// #header의 하위 노드 중 p 탐색. 반드시 매개변수 필요
  $('#header').find('p').css({ borderColor:'teal' });
});

  $('.part').nextAll('ul').find('a').css({borderColor:'ograngered'});

  $('.part').filter('ul'); //.part 중 ul 탐색
  $('.part').filter('ul').css({ listStyle:'none' });
  
  $('div').filter('#header').children('p').css({ color:'#f49', fontSize:30, fontWeight:'bold'})