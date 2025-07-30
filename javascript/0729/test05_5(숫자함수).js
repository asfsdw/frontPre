'use strict'

// max()
// min()
// ceil(): 무조건 올림
// floor(): 무조건 내림
// trunc(): 무조건 버림
// pow(): 거듭제곱
// abs(): 절대값
// sqrt(): 제곱근
// toFixed(): 반올림
// random():

let su1 = 10, su2 = -20, su3 = 3.15, su4 = -3.15, su5 = 12345;
let str = '';

str += 'max(): '+Math.max(su1,su2,su3,su4,su5)+'<br/>';
str += 'min(): '+Math.min(su1,su2,su3,su4,su5)+'<br/>';
str += 'ceil(): '+Math.ceil(su3)+'<br/>';
str += 'ceil(): '+Math.ceil(su4)+'<br/>';
str += 'floor(): '+Math.floor(su3)+'<br/>';
str += 'floor(): '+Math.floor(su4)+'<br/>';
str += 'trunc(): '+Math.trunc(su3)+'<br/>';
str += 'trunc(): '+Math.trunc(su4)+'<br/>';
str += 'pow(a, b): '+Math.pow(2, 5)+'<br/>'; // 2의 5승
str += 'abs(): '+Math.abs(su3)+'<br/>';
str += 'abs(): '+Math.abs(su4)+'<br/>';
str += 'sqrt(): '+Math.sqrt(25)+'<br/>'; // 루트25 = 5
str += 'toFixed(): '+su3.toFixed(1)+'<br/>'; // 표시할 자리수를 적으면 반올림해서 입력한 자리수까지 출력
str += 'toFixed(): '+su4.toFixed(2)+'<br/>';
str += 'toFixed(): '+su5.toFixed(0)+'<br/>';
str += 'random()'+Math.random()+'<br/>'; // 0~1까지 실수형 난수 출력
str += 'random()'+(parseInt(Math.random()*10)+1)+'<br/>'; // 1~10까지 실수형 난수 출력
str += 'random()'+(parseInt(Math.random()*(10-5+1))+5)+'<br/>'; // 5~10까지 실수형 난수 출력

demo.innerHTML = str;