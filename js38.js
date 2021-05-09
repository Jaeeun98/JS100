//학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수 출력, 사탕 = 1, 2, 3위만 받음(중복가능)

const score = prompt("학생들의 점수를 공백으로 구분하여 입력해 주세요.", "97 86 75 66 55 97 85 97 97 95").split(' ');
score.sort((a, b) => { return b - a }); //내림차순 정렬

result();

function result(){
    let tempN = 0;  //두 값이 같지 않을 때의 값
    let i = 0;

    while(tempN < 4){
        if(score[i] != score[i+1]){
            tempN++;
        }
        i++;
    }
    return console.log(i-1);
}

//사탕 받을 학생의 수 = 중복된 1, 2, 3 → 중복되지 않은 값이 3개일 때까지 몇개의 값이 있는지 세면 됨(n)
//i의 값이 n의 값과 동일, 그러나 맨 마지막에 i++이 되므로 -1



/*원래 정답
const scores = prompt('점수입력').split(' ').map(function(n){
  return parseInt(n, 10);    //각 값을 숫자(10진수)로 바꿔줌
});

scores.sort((a, b) => {
  return a-b; ()   //오름 차순 정렬
});

let count = 0;  //카운트 값
let arr = [];  //빈 배열

while (arr.length < 3) {
  let n = scores.pop();   //n = scores의 맨 뒤의 값
  if (!arr.includes(n)){  //맨 뒤의 값이 존재 하지 않을 때 = 반복되는 값이 없을 때
    arr.push(n);  //arr 배열에 n을 넣어라
  }
  count += 1;
}
//반복되지 않는 값이 3개 나올때까지 카운터를 센 후 카운터 출력

console.log(count);
*/
