'use starict'
let str = "";

// 오늘 날짜: Date()
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1; //0월부터 11월까지 출력된다.
const date = today.getDate();
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
const milsec = today.getMilliseconds();
const time = today.getTime();
const week = today.getDay(); // 0=일요일

let strWeek = ['일','월','화','수','목','금','토']

// 이번달의 마지막 일자(2를 입력하면 원래 3월이지만, 날짜를 0을 주면 전 달의 마지막 날짜를 불러오기 때문에 2월의 마지막 날짜를 불러온다).
let lastDate = new Date(2024, 2, 0); // 년, 월, 일

str += "현재시각: "+today+"<br/>"
str += "올해는: "+year+"년<br/>"
str += "금월: "+month+"월<br/>"
str += "오늘: "+date+"일<br/>"
str += "시: "+hour+"시<br/>"
str += "분: "+min+"분<br/>"
str += "초: "+sec+"초<br/>"
str += "밀리초: "+milsec+"밀리초<br/>"
str += "나노초: "+time+"나노초<br/>"
str += "요일: "+strWeek[week]+"요일<br/>"
str += "금월 마지막 날: "+lastDate.getDate()+"일<br/>"

demo.innerHTML = str;