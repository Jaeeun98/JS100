//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.(소수면 YES, 아니면 NO 출력)

const num = Number(prompt('숫자를 입력해 주세요'));

console.log(result());

function result(){
    if(num == 1) return "No";  //1 = 소수x

    for(let i=2; i<num; i++){
        if(num%i == 0) return "No"  //1과 자기 자신 제외하고 나눠지는게 있으면 소수x
    }
    return "YES"  //위에서 걸러진거 빼고 모두 소수
}


/* 원래 정답

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {   
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {  
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);

*/