//퀵 정렬 구현

function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];  //기준 값
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));

/* 퀵 정렬

기준 키를 기준으로 작거나 같은 값을 지닌 데이터는 앞으로, 큰 값을 지닌 데이터는 뒤로 가도록 함
기준 키는 맨 처음이든, 가운데은, 만 마지막이든 상관 없다.
*/