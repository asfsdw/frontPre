'use strict'

let arr1 = [
  '문자자료',
  5,
  [2,4,5,6],
  {tel: '010-1234-5678'},
  function() {console.log("안녕하세요.");}
];

console.log(arr1);
console.log(arr1[2]);
console.log(arr1[4]);
console.log('');
arr1.push(25);
console.log(arr1);

console.log('');
let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,5,7,9];
arr2[3] = {name: '홍길동'};
arr2[4] = function() {console.log("감사합니다.")};
console.log(arr2);

let str1 = arr2.join("-");
console.log(str1);

console.log('');
arr2.forEach((data, i) => console.log(data, i));

console.log('');
arr2.map((data, i) => {
  if(i%2 == 0) console.log(data, i)
  });

console.log('');
console.log('필터');
arr2.filter((data, i) => console.log(data, i));

console.log('');
console.log('필터');
let filterArr = arr2.filter((data, i) => i%2 == 0);
console.log(filterArr);

console.log('맵');
arr2.filter((data, i) => i%2 == 0).map(data => console.log(data));

console.log('');
console.log('정렬');
let arr3 = [10,8,20,15,11,17];
let res3 = arr3.sort();
console.log(res3); // 앞자리를 비교 후, 뒷자리 비교. 8이 제일 크다.

res3 = arr3.sort((a, b) => a-b); // 오름차순
console.log(res3);
res3 = arr3.sort((a, b) => b-a); // 내림차순
console.log(res3);

// 역순출력: revers()
res3 = arr3.reverse();
console.log(res3);

console.log('');
console.log('최대, 최소');
// 최대: max(), 최소: min()
let max = Math.max(10,8,20,15,11,17);
console.log(max);
let min = Math.min(10,8,20,15,11,17);
console.log(min);