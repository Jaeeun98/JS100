//병합정렬 구현
function mergeSort(arr){
    if (arr.length <= 1){  // 리스트 길이가 0 or 1이면 이미 정렬된 것으로 봄
      return arr;
    }
  
    //둘을 나눔
    const mid = Math.floor(arr.length / 2);  //가운데 값
    const left = arr.slice(0,mid);  //가운데 값 기준으로 왼쪽 arr
    const right = arr.slice(mid);  //가운데 값 기준으로 오른쪽 arr
  
    return merge(mergeSort(left), mergeSort(right));  //재귀함수로 요소 반복적으로 나누기
  }
  
  function merge(left, right){
    let result = [];
  
    while (left.length && right.length){
      if (left[0] < right[0]){    
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift())
    }
    while (right.length) {
      result.push(right.shift())
    }
  
    return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(mergeSort(array));

/* 병합정렬

1. 리스트 길이가 0 or 1이면 이미 정렬된 것으로 본다.
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두부분 리스트로 나눈다.
3. 각각의 리스트에 숫자가 하나만 남을 때까지 계속해서 나눠준다
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

https://blog.naver.com/jaeeun_98/222089298039
*/