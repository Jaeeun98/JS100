//첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되면,
//찾을 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

const st = prompt('문자열을 입력해 주세요');
const findSt = prompt('찾고 싶은 문자를 입력해 주세요');

console.log(st.indexOf(findSt));

//array 뿐 아니라 String에서도 사용 가능