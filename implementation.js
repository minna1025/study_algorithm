// 구현: 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정
// 풀이를 떠올리는 것은 쉽지만 소스코드로 옮기기 어려운 문제
// 알고리즘은 간단한데 코드가 지나칠 만큼 길어지는 문제
// 실수 연산을 다루고, 특정 소수점 자리까지 출력해야 하는 문제
// 문자열을 특정한 기준에 따라서 끊어 처리해야 하는 문제
// 적절한 라이브러리를 찾아서 사용해야 하는 문제


const n = 5;
let x = 1, y = 1
let plans = ['R', 'R', 'R', 'U', 'D', 'D']

// L, R, U, D에 따른 이동 방향
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]
const move_types = ['L', 'R', 'U', 'D']

// 이동 계획을 하나씩 확인하기
for (plan of plans) {
  let nx = -1, ny = -1;
  // 이동 후 좌표 구하기
  for (i in move_types) {
    if (plan === move_types[i]) {
      nx = x + dx[i];
      ny = y + dy[i];
    }
    // 공간을 벗어나는 경우 무시
    if (nx < 1 || ny < 1 || nx > n || ny > n) {
      continue;
    }

    // 이동 수행
    x = nx;
    y = ny;
  }
}

console.log(x, y)




///////////////////////////// Brute Forcing /////////////////////////////
const h = 5;

let count = 0;
for (let i = 0; i < (h +1); i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if ((String(i)+String(j)+String(k)).includes('3')){
        count += 1;
      }
    }
  }
}

console.log(count)




////////////////////////////////////////////////////////////////////////
// 현재 나이트의 위치
const nigth = 'a1';
let row = nigth.charAt(1) - '0';
let column = nigth.charAt(0).charCodeAt() - 'a'.charCodeAt() + 1;
console.log(row, column)

// 나이트가 이동할 수 있는 8가지 방향
const dx2 = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy2 = [-1, -2, -2, -1, 1, 2, 2, 1];

// 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
let result = 0;
for (let i = 0; i < 8; i++) {
  // 이동하고자 하는 위치 확인
  let next_row = row + dx2[i];
  let next_column = column + dy2[i];
  // 해당 위치로 이동이 가능하다면 카운트 증가
  if (next_row >= 1 && next_row <= 8 && next_column >= 1 && next_column <= 8) {
    result += 1;
  }
}

console.log(result)




////////////////////////////////////////////////////////////////////////
// const data = 'K1KA5CB7'; // 결과: 'ABCKK13'
const data = 'AJKDLSI412K4JSJ9D'; // 결과: 'ADDIJJJKKLSS20'

let result2 = [];
let value = 0;

// 문자를 하나씩 확인
for (x of data) {
  // 알파벳인 경우 결과 리스트에 삽입
  if (/[a-zA-Z]/.test(x)) {
    result2.push(x);
  }else {
    // 숫자는 따로 더하기
    value += Number(x);
  }
}
// 알파벳을 오름차순으로 정렬
result2.sort();

// 숫자가 하나라도 존재하는 경우 가장 뒤에 삽입
if (value != 0) {
  result2.push(String(value));
}
result2 = result2.join('');

console.log(result2)