'use strict'

function regExCheck() {
  // 'atom'이라는 문자열이 포함되어 있는가?
  const regEx1 = /atom/g;
  // 'mbc || kbs || sbs'중 하나라도 포함되어 있는가?
  const regEx2 = /mbc|kbs|sbs/g
  // 홍길동 혹은 홍길순을 포합하고 있는가?
  const regEx3 = /홍길(동|순)/g
  // 영문 소문자를 포함하고 있는가?
  const regEx4 = /[a-z]/g
  // 한글을 포함하고 있는가?
  const regEx5 = /[가-힣]/g
  // 영문 소문자만 썼는가?
  const regEx6 = /[^a-z]/g
  // 영문 대, 소문자, 숫자만 포함되어 있는가?
  const regEx7 = /[^a-zA-Z0-9]/g
  // 숫자와 한글만 포함되어 있는가?
  const regEx8 = /[^0-9가-힣]/g
  // 영어 대, 소문자, 숫자, _-만 포함되어 있는가?
  const regEx9 = /[^a-zA-Z0-9_-]/g

  // .을 포함하고 있는가?
  const regEx21 = /\./g
  // 본문에 숫자가 포함되어 있는가?
  const regEx22 = /\d/g
  // 숫자 외에 다른 값을 포함하고 있는가?
  const regEx23 = /\D/g
  // 영문자 숫자 _값을 포함하고 있는가?
  const regEx24 = /\w/g
  //const regEx = //g
  // 공백을 포함하고 있는가?
  const regEx25 = /\s/g

  //(): 그룹
  // ?=*: []안의 내용이 1개 이상 반복됐는가?

  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요.");
    document.getElementById("content").focus();
    return false;
  }

  // 정규식 체크
  // if(!content.match(regEx1)) alert("본문이 atom문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx2)) alert("본문이 mbc/kbs/sbs문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx3)) alert("이름에 '홍길동', '홍길순'을 포합하고 있지 않습니다.");
  // if(!content.match(regEx4)) alert("본문에 영문 소문자를 포함하고 있지 않습니다.");
  // if(!content.match(regEx5)) alert("본문에 한글을 포함하고 있지 않습니다.");
  // if(content.match(regEx6)) alert("본문에 소문자 외에 다른 글자가 포함되어 있습니다.");
  // if(regEx7.test(content)) alert("본문에 영어 대, 소문자, 숫자 외에 다른 글자가 포함되어 있습니다.")
  // if(regEx9.test(content)) alert("영어 대, 소문자, 숫자, _- 외에 다른 글자가 포함되어 있습니다.")
  // if(!regEx21.test(content)) alert("본문에 .이 포함되어 있지 않습니다.")
  // if(!regEx22.test(content)) alert("본문에 숫자가 포함되어 있지 않습니다.")
  // if(!regEx23.test(content)) alert("본문에 숫자만 쓰여있습니다.")
  // if(!regEx24.test(content)) alert("영문과 숫자 _값 외에 다른 값이 포함되어 있습니다.")
  if(regEx25.test(content)) alert("본문에 공백이 포함되어 있습니다.")
  else {
    let str = '';
    str = document.getElementById("content").value;
    demo.innerHTML = `<font color="red"><b>${str}<br/><br/>정상적으로 입력되었습니다.</b></font>`
  }
}