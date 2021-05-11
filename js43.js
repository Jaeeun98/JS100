//사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

let num = Number(prompt('숫자를 입력해 주세요'));
let num2 = [];

while(num){  //num을 2로 나눈 값이 true일때까지, 0 = false → 0전까지(1까지)
    num2.unshift(num%2);     //나머지를 아래에서부터 세기 때문에 맨 앞에 넣어줌
    num = Math.floor(num/2); //반올림을 버리지 않으면 소수점이 나옴
}

console.log(num2.join(''))


/*원래 답안
let a = prompt('10진수를 입력해주세요.')
let b = [];
let result = '';

while (a){  
	b.push(a % 2);
	a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
})

console.log(result);
console.log(Boolean(0))

*/