//공백으로 구분하여 두 숫자가 주어집니다.
//두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const num = prompt('두 개의 숫자를 입력해 주세요', '6 2').split(' ');
const div = num[0] / num[1];
const rem = num[0] % num[1];  //계산하면 타입이 자동으로 Number로 변환됨

console.log(`${div} ${rem}`);

/*
원래 답안
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
*/