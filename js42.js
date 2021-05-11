//두 수 a, b를 입력받아 2021년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
//요일의 이름은 SUN, MON, TUE, WED, THU, FRI, SAT
//실제로 없는 날은 주어지지 않음

const mon = prompt('월을 입력해 주세요');
const day = prompt('일을 입력해 주세요');

console.log(result());

function result(){
    const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const d = new Date(`2021/${mon}/${day}`);

    return arr[d.getDay()]
}

/* 원래답안
```jsx
const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));
```

*/