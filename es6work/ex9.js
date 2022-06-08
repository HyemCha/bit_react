//화살표 함수 : 일반함수와의 차이점 : 객체 생성 안 됨, new 사용 못 함
function f1(){
    console.log("일반함수 f1");
} 

f1();

let f2 = () => console.log("화살표 함수 f2");
f2();

///////////////////
function f3(a,b){
    return a+b;
}

let a = f3(5,7);
console.log(a);

let f4 = (a,b) => a+b; //return 생략
let b = f4(11,22);
console.log(b);

//////////////////
function f5(x,y,z=30){
    return x+y+z;
}

console.log(f5(1,2,3));
console.log(f5(10,20));

let f6 = (x,y,z=30) => x+y+z;

console.log(f5(1,2,3));
console.log(f5(10,20));

let ob = {
    f1:() => {
        console.log(1);
        let f2 = () => console.log(2);
        f2();
        setTimeout(f2,1000); //1초 뒤 f2 호출
    }
}

ob.f1();