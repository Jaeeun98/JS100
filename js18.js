//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
//단, 소숫점 자리는 모두 버립니다.
const lg = Number(prompt("국어 점수를 입력해 주세요"));
const mt = Number(prompt("수학 점수를 입력해 주세요"));
const en = Number(prompt("영어 점수를 입력해 주세요"));

const numAvg = Math.floor((lg + mt + en)/3);  //floor : 소수점 버리기
if(typeof numAvg != "number"){
    alert("점수를 다시 입력해 주세요");
} else {
    console.log(numAvg);
}
/*
원래 정답
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');  //split(' ') : 띄어쓰기를 기준으로 배열로
let sum = 0;

for(let i=0; i<3; i++){
    sum += parseInt(scores[i],  10)  //10진수 형태의 숫자로 타입 변환
}

console.log(Math.floor(sum/3));
*/
