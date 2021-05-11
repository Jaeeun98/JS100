//문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

const st = prompt('문자를 입력해 주세요').split('');

for(let i=0; i<st.length; i++){
    let up = st[i].toUpperCase();
    let low = st[i].toLowerCase();

    if(st[i] == up){
        st[i] = low;
    } else{
        st[i] = up;
    }
}

console.log(st.join(''))


/* 원래 답안
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);
*/