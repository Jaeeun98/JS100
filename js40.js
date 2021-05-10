//모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 
//첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
//그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.
//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

const limit = Number(prompt('제한 무게를 입력해 주세요'));
const n = prompt('인원 수를 입력해 주세요');
const kg = prompt('몸무게를 입력해 주세요').split(' ');

result();

function result(){
    let temp = 0;
    let i=0;

    while(temp <= limit){
        temp += kg[i+2];
        i++;
    }
    return console.log(i);
}

/*원래 답안
let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);
*/