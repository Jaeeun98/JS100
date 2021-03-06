//버블 정렬 구현하기
function bubble(arr) {
    let result = arr.slice(); //원본 배열 복사
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length-1; j++) {
        if (result[j] > result[j + 1]) {
           let temp = result[j];
           result[j] = result[j + 1];
           result[j + 1] = temp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));


/* 버블정렬

인접한 두 원소를 검사하여 더 작은 숫자를 앞으로 정렬하는 자료구조
시간 복잡도는 느리지만 코드가 단순하기 대문에 자주 사용된다.
  
*/