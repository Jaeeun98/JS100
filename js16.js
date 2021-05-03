//문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

 const stPrompt = prompt("문장을 입력해 주세요");
 const result = stPrompt.split('').reverse().join('');
 console.log(result);