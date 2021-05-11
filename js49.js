//공백으로 주어진 숫자들 중 최댓값을 반환하라.

const num = prompt('숫자를 공백으로 구분하여 입력해 주세요').split(' ');
num.sort((a, b) => b - a);
console.log(num[0]);

