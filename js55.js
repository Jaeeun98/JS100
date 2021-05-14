/*
const route = [];  //회수

function hanoi(num, start, temp, end){
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num-1, start, temp, end);
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num-1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

*/

const route = [];  //횟수

function hanoi(num, start, temp, end){
    if(num === 1){
        route.push([start, end])
        return;  //if문 나가기
    }

    hanoi(num-1, start, temp, end);  //n-1개를 경유기둥으로 옮기기
    route.push([start, end]);        //가장 큰 원반을 목표기둥으로
    hanoi(num-1, temp, end, start)   //경유기둥과 시작기둥을 바꿈
}
 
hanoi(3, 'A', 'B', 'C');
console.log(route.length);