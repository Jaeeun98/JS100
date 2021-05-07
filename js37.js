//학생들이 뽑은 후보들을 공백으로 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하시오

const student = prompt("후보를 입력해 주세요", "원범 원범 원범 혜원 혜원 유진 유진").split(' ');



console.log(result());

function result(){
    let a = 0;
    let b = 0;
    let c = 0;
    let winner = "";
    for(let i=0; i<student.length; i++){
        if(student[i] == "원범"){
            a++
        } else if(student[i] == "혜원"){
            b++
        } else if(student[i] == "유진"){
            c++
        }
    }

    if(a > b & a > c){
        return `원범이가 ${a}표로 반장이 되었습니다.`
    } else if(b > a & b > c){
        return `혜원이가 ${b}표로 반장이 되었습니다.`
    } else if(c > a & c > b) {
        return `유진이가 ${c}표로 반장이 되었습니다.`
    }
}


