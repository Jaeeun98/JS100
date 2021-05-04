/*첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
*/

const student = prompt("이름을 공백으로 구분하여 입력해 주세요", "jaeeun jineun").split(' ');
const score = prompt("수학 점수를 공백으로 구분하여 입력해 주세요", "100 10").split(' ');
const ob = {};

console.log(student[0]);
console.log(score);

for(let i=0; i<student.length; i++){
    ob[student[i]] = Number(score[i]);
}
//배열의 값을 추가하려면 .이 아니라 [] 사용
console.log(ob);

