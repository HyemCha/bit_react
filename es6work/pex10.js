let a = 12;
let b = 23.0;
let c = 12.6;
console.log(`${a}는 정수인가? ${Number.isInteger(a)}`);
console.log(b + "는 정수인가?" + Number.isInteger(b));
console.log(`${c}는 정수인가? ${Number.isInteger(c)}`);

let a1 = "NaN";
let b1 = NaN;
let c1 = "ㅗㅑ";
let d1 = 1;
console.log(a1 + "은 NaN인가?" + isNaN(a1));
console.log(`${b1}은 NaN인가? ${isNaN(b1)}`);
console.log(c1 + "은 NaN인가?" + isNaN(c1));
console.log(d1 + "은 NaN인가?" + isNaN(d1));