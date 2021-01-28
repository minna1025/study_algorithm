// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// AB	1	BC
// z	1	a
// a B z	4	e F d



function solution(s, n) {
  var answer = '';
  const sArray = s.split('')
  sArray.forEach(c => {
    if ( c.charCodeAt(0) === 32 ) {
      answer += ' '
    }
    if ( c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 ) {
      if ( c.charCodeAt(0) + n > 90 ) {
        answer += String.fromCharCode(65 + ((c.charCodeAt(0) + n) - 90 - 1))
      } else {
        answer += String.fromCharCode(c.charCodeAt(0) + n)
      }
    } else if ( c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122 ) {
      if ( c.charCodeAt(0) + n > 122 ) {
        answer += String.fromCharCode(97 + ((c.charCodeAt(0) + n) - 122 - 1))
      } else {
        answer += String.fromCharCode(c.charCodeAt(0) + n)
      }
    }
  })
  return answer;
}


console.log(solution('z', 1))