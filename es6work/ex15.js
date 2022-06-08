//es6에서는 class 기능이 추가됨
class Student{
    //생성자
    constructor(name){
        this.name = name;//멤버변수 선언 안 해도 알아서 멤버변수 만들어줌
    }

    //멤버 함수
    writeName(){
        console.log(`내 이름은 ${this.name} 이랍니다!!!`);
    }
}

//클래스 생성
let s1 = new Student("마이클");
console.log("이름 : " + s1.name);
s1.writeName();

let s2 = new Student("캐서린");
console.log(`이름 : ${s2.name}`);
s2.writeName();
