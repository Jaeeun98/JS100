// 키가 공백으로 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성하시오.

const height = prompt("키를 공백으로 나눠 입력해 주세요", "167 154");
//height를 배열로 바꾼 후 직접 sort하면 원래 값도 sort되기 때문에 비교할수가 없음


heightSort();

function heightSort(){
    const temp = height.split(' ').sort(function(a, b){return a-b;});
    if(height === temp.join(' ')){
        console.log("YES");
    } else {
        console.log("NO");
    }
}

/*

score.sort(function(a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

score.sort(function(a, b) { // 내림차순
    return b - a;
    // 11, 10, 4, 3, 2, 1
});
→ 아스키코드때문에  sort만 사용하면 제대로된 정렬이 안 됨.

*/

