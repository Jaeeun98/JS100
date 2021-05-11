//getTime() 함수를 이용하여 현재 연도를 출력해보세요.

const d = new Date();
let time = d.getTime();
time = Math.floor(time/(60*60*1000*365*24))+1970

console.log(time);