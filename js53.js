//입력으로 주어진 괄호 문자열이 바른 문자열이면 "YES", 아니면 "NO"를 출력해보자.
//괄호 문자열 : (), {}, []
//바른 문자열 : (()) / 바르지 않은 문자열 : ())

/*
console.log(result(stPrompt))

function result(st){
    let tempA = [st[0]];
    let tempB = [];

    for(let i=1; i<st.length; i++){
        if(st[0] == st[i]){
            tempA.push(st[i])
        } else {
            tempB.push(st[i])
        }
    }

    return tempA.length == tempB.length ? "YES" : "NO"
}

//원래 내가 썼던 답 → count를 사용하면 훨씬 간결하게 할 수 있을 것 같아서 바꿈
*/

const stPrompt = prompt('문자열을 입력해 주세요').split('');

console.log(result(stPrompt))

function result(st){
    let count = 1;

    for(let i=1; i<st.length; i++){
        st[0] == st[i] ? count++ : count--   
    }

    return count == 0 ? "YES" : "NO"
}


/* 원래 답안
function math(e){
    let count = 0;
    
    //괄호 개수가 같지 않으면 false
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let 괄호 = [];
    for (let i in e){
        if (e[i] === '(') {
            괄호.push('(');
        }
            
        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력해주세요.').split('');

if (math(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}

*/