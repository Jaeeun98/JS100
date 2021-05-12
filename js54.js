//숫자가 공백으로 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

const num = prompt('숫자를 공백으로 구분하여 넣어주세요.').split(' ').map((a) => Number(a));

function result(){
    for(let i=0; i<num.length-1; i++){
        if((num[i]+1) != (num[i+1])) return 'NO'
    }
    return 'YES'
}

console.log(result())