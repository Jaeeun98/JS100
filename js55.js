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