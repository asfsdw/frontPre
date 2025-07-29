'use starict'
                    // 10        20        30        40        50        60
          // 01234567890123456789012345678901234567890123456789012345678901234
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    // 10        20        30        40        50        60
          // 01234567890123456789012345678901234567890123456789012345678901234
let text2 = '    ABC    BC    ABC   GHI   JKLABCMN...... A AC .. OPQ.. abc opq';

// length: 길이
// substring(): 특정 문자열의 지정된 위치의 문자열을 추출한다.
// indexOf(): 문자, 문자열 검색. 있으면 위치값, 없으면 -1반환.
// lastIndexOf(): 뒤에서부터 검색하는 indexOf().
// incrudes(): 특정 문자열의 포함 유무. 있으면 true, 없으면 false.
// concat(): 문자열 결합.
// slice(): 지정된 인덱스 위치부터 지정 인덱스 -1까지의 문자열을 새로운 변수에 복사.
// trim(): 문자열의 공백 삭제.
// replace(): 처음 찾은 특정 문자나 문자열을 다른 문자나 문자열로 치환.
// replaceAll(): 특정 문자나 문자열을 다른 문자나 문자열로 치환.
// charAt(): 문자열에서 한 개 문자 추출.
// charCodeAt(): 문자열에서 한 개 문자의 아스키 코드값을 추출.
// split(): 문자열에서 특정 문자를 기준으로 자르기.
// join(): 배열 안의 문자들을 특정 문자를 기준으로 합치기.
// toUpperCase(): 대문자로 변경.
// toLowerCase(): 소문자로 변경.

let str = "";
let tel = '010-1234-5678'
let tels = tel.split('-');;

str += "총 문자 길이: " + text1.length + "<br/>";
str += text1.substring(6) + "<br/>";
str += text1.substring(6,10) + "<br/>";
str += "abc가 있는 인덱스(앞에서): " + text1.indexOf('abc') + "<br/>";
str += "abc가 있는 인덱스(앞에서): " + text2.indexOf('abc') + "<br/>";
str += "abc가 있는 인덱스(뒤에서): " + text1.lastIndexOf('abc') + "<br/>";
str += "abc가 있는 인덱스(뒤에서): " + text2.lastIndexOf('abc') + "<br/>";
str += "abc가 포함되어있는가?: " + text1.includes('abc') + "<br/>"
str += "text1과 text2를 결합: " + text1.concat(text2) + "<br/>" // 공백은 많아도 한 칸으로 본다.
str += "text1과 text2를 결합(trim): " + text1.concat(text2.trim()) + "<br/>"
str += "지정된 인덱스 위치부터 복사: " + text1.slice(5) + "<br/>";
str += "지정된 인덱스 위치부터 지정된 인덱스 위치 -1까지 복사: " + text1.slice(5,10) + "<br/>";
str += "특정 문자, 문자열을 다른 문자, 문자열로 치환: " + text1.replace('abc', "opq") + "<br/>";
str += "특정 문자, 문자열을 다른 문자, 문자열로 치환: " + text2.replace('BC', "12345") + "<br/>";
str += "특정 문자, 문자열을 다른 문자, 문자열로 치환: " + text2.replaceAll('BC', "12345") + "<br/>";
str += "문자열에서 한 개의 문자를 추출: " + text1.charAt(5) + "<br/>"
str += "문자열에서 한 개 문자의 아스키코드를 추출: " + text1.charCodeAt(0) + "<br/>"
str += "문자열을 특정 기준으로 자르기: " + tel.split('-') + "<br/>"
str += "자른 문자열을 특정 기분으로 붙이기: " + tels.join('/') + "<br/>"

demo.innerHTML = str;