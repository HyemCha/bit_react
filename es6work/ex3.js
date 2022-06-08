/*
    var : 함수형 변수 
    let : 영역형 변수
*/
var a = 1;
let b= 2;
function myFunction(){
    var a = 3; // 5행의 변수와 전혀 다른 변수
    let b = 4; // 6행의 변수와 전혀 다른 변수

    if(true){
        var a = 5;  // 8행의 a값을 덮어씀 함수안에서 같은 
        let b = 6;  // 9행의 b와 전혀 다른 변수
        console.log(a); // 5
        console.log(b); // 6
    }
    console.log(a); // 5
    console.log(b); // 4
}
//
myFunction();
console.log(a); // 1
console.log(b); // 2