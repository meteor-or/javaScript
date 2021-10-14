'user static';

(function fxName(x){
  console.log('x:', x * x);
} (4));

(myFx = function (x, y) {
  console.log('x * y:', x + y);//
}('재미있는', 'JS!'))

myFx(3,5);//
