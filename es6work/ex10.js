//Number 객체
let a = 12;
let b = 23.0;
let c = 12.6;
console.log(a + "는 정수인가?" + Number.isInteger(a)); //true
console.log(b + "는 정수인가?" + Number.isInteger(b)); //true
console.log(c + "는 정수인가?" + Number.isInteger(c)); //false

let a1 = "NaN";
let b1 = NaN;
let c1 = "안녕";
let d1 = 12;
//es5의 isNaN:숫자가 아닌 경우 모두 true
console.log("es5 isNaN");
console.log(a1 + " 은 NaN인가?" + isNaN(a1)); //true
console.log(b1 + " 은 NaN인가?" + isNaN(b1)); //true
console.log(c1 + " 은 NaN인가?" + isNaN(c1)); //true
console.log(d1 + " 은 NaN인가?" + isNaN(d1)); //false

//es6의 isNaN:정말 NaN인 경우에만 true
console.log("es6 isNaN");
console.log(a1 + " 은 NaNa인가?"+Number.isNaN(a1)); //false
console.log(b1 + " 은 NaNa인가?"+Number.isNaN(b1)); //false
console.log(c1 + " 은 NaNa인가?"+Number.isNaN(c1)); //false
console.log(d1 + " 은 NaNa인가?"+Number.isNaN(d1)); //false

console.log("반복합수 repeat"); //반복
console.log('ㅋ'.repeat(100)); //반복
console.log('='.repeat(30)); //반복
console.log('*'.repeat(20)); //반복

var x = "20";
var y = "3";
console.log(x+y);
console.log(Number(x) + Number(y));