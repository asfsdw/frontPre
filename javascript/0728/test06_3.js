'use strict';
function atom1() {
  alert("atom1 함수호출");
}
function atom2(msg) {
  alert("atom2 함수호출: "+msg);
}
function atom3(su) {
  alert("atom3 함수호출: "+(su+100));
}
function atom4(su1, su2) {
  alert("atom4 함수호출: "+(su1+su2)+"\n"+(su1-su2)+"\n"+(su1/su2)+"\n"+(su1*su2));
}
function atom5(name, age) {
  let intAge = parseInt(age);
  alert("atom5 함수호출: "+"\n이름: "+name+"\n나이: "+(intAge+1)); //+만 붙이기고 나머지는 연산이 된다.
}