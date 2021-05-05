//다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.
//= 상수가 아닌 것
/*
1)  arr[i] 
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
*/

//답안 : 3번, 5번 → slice() : 배열의 여러 요소를 가져올 때 사용, includes() : 특정 요소를 가지고 있는지 판별


/*
시간복잡도 : 알고리즘을 수행하는데 연산이 몇 번 이루어 지는지 숫자로 표현한 것
Big O : 알고리즘 성능을 수학적으로 표기해주는 표기법

1) O(1) = 상수 : 입력 데이터 크기와 상관없이 일정한 시간이 걸리는 알고리즘
2) O(n) : 입력 데이터 크기와 처리 시간 비례
3) O(n^2) : 입력 데이터 제곱의 크기와 처리 시간 비례
4) O(n log n) : 데이터 양이 n 배 많아지면, 실행시간은 n 보다 조금 많아짐(정비례x)
5) O(n^3) : 입력 데이터 크기에 비해 처리 시간이 3배 더 높음
6) O(logN) : 데이터 양이 많아져도 시간은 조금씩만 늘어남(시간 비례 탐색 가능 데이터양이 2^n) 
*/