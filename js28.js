//입력된 문자열에서 2개의 연속된 요소를 출력하는 프로그램을 만드시오.

const st = prompt('문자를 입력해 주세요').split('');

for(let i=0; i<st.length-1; i++){
    console.log(st[i], st[i+1]);
}
