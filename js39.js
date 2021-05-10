//문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

const st = prompt('문장을 입력해 주세요').split('');

function result(){
    for(i=0; i<st.length; i++){
        if(st[i] == 'q'){
            st[i] = 'e';
        }
    }
    return st.join('');
}

console.log(result());

/*원래 정답

1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}
console.log(replaceAll(word,"q","e"));

//k를 구분자로 넣어서 배열로 반환하면, k부분은 빈 칸이 되어 반환됨
//e를 구분자로 넣어서 문자열로 반환하면, 빈 부분은 e로 채워져서 반환됨


2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));

*/