//번호 가리기
function solution(phone_number) {
    var answer = '';
    for(let i=0; i<phone_number.length; i++){
        if(i<phone_number.length-4) {
            answer = answer + "*";
        } else {
            answer = answer+phone_number[i];
        }
    }
    return answer;
}


//없는 숫자 더하기
function solution(numbers) {
    let answer = 0;
    for(let i=0; i<=9; i++) {
        if(!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}


//나누어 떨어지는 숫자배열
function solution(array, divisor) {
    let answer = [];
    for(let element of array) {
        if(element % divisor === 0)
        answer.push(element);
    }
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b);
}