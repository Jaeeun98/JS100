//사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
//ex) 18234 = 1+8+2+3+4 = 18
/*
const pro = prompt('숫자를 입력해 주세요').split('');
const num = pro.map((a) => Number(a))
let result = 0;

for(let i=0; i<num.length; i++){
    result += num[i];
}

console.log(result);
*/
 //원래답안
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}

console.log(sum);


