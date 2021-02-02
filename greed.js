let n = 25;
let k = 5;

let result = 0;

while(true) {
  let target = ( n / k ) * k;
  result += (n - target);
  n = target;
  if (n < k) break;
  result++;
  n /= k;
}

result += (n - 1);

console.log(result)



////////////////////////////////////////////////////////////////////////



const giveStr = '02984';

let result2 = giveStr.slice(0, 1);

for (str of giveStr.substring('')) {
  if(str <= 1 || result2 <= 1) {
    result2 += str;
  } else {
    result2 *= str;
  }
}

console.log(result2);



////////////////////////////////////////////////////////////////////////



let people = 5;
let data = '2 3 1 2 2';

let dataArr = data.split(' ');

let result3 = 0; // 총 그룹의 수
let count = 0;  // 현재 그룹에 포함된 모험가의 수

for (i of dataArr) {  // 공포도 낮은 것 부터 하나씩 확인
  count += 1; //현재 그룹에 해당 모험가를 포함시키기
  if (count >= i) { //현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹결성
    result3 += 1;  // 총 그룹의 수 증가
    count = 0;  // 현재 그룹에 포함된 모험가의 수 초기화
  }
}

console.log(result3)








