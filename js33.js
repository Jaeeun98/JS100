//한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const num = prompt("숫자를 입력해 주세요", '12345').split('').reverse();
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

/* 원래 답안
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);
*/