//객체 할당
let obj1 = {"name":"lee","age":23};
console.log(obj1.name,obj1.age);

//오브젝트 대입
let obj2 = obj1;
console.log(obj2.name,obj2.age);

//이름,나이를 단일 변수에 대입(es5)
let  name1 = obj2.name;
let age1 = obj2.age;
console.log(name1,age1);

//es6
let name,age; //객체의 멤버와 같은 이름으로 선언해야 한다.
({name,age} = obj1);
console.log(name,age);

//함수 인자로 객체를 보낼 경우
function f1({name='수지',age=20} = {}){
    console.log(name,age);
}

//함수 호출
f1(obj1); //lee 23
f1(); //수지  20
f1(obj1.name); //객체가 아닌 멤버를 보낼 때는 default값이 출력. 중괄호를 썼으면 객체로 보내야함