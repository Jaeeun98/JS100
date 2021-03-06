//아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
//set 자료형 응용

const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };

const set = new Set();
for(let key in people){
    set.add(people[key]);
}

console.log(set.size);


/*
for in : 객체의 열거 가능한 모든 속성을 순회하는 반복문.
*/