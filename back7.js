//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const num = Number(prompt("시험 점수를 입력해 주세요"));

if(num >= 90){
    console.log('A')
} else if(num >= 80){
    console.log('B')
} else if(num >= 70){
    console.log('C')
} else if(num >= 60){
    console.log('D')
} else {
    console.log('F')
}
