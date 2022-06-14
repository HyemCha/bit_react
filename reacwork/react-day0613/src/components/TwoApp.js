import React,{useState} from "react";
import '../App.css';

const TwoApp =()=>{
    const [inputs,setInputs] = useState({
        name:'강호동',
        addr:'강남구',
        age:20
    });

    const changeData=e=>{
        console.log('name:'+e.target.name);
        console.log('value:'+e.target.value);
        console.log("e.target : " + e.target);

        //name,value 값 얻기
        const {name,value} = e.target;
        //변경
        setInputs({
            ...inputs,//기존값은 변경 안되게
            [name]:value
        })
    }
    return(
        <div>
            <h3 className="alert alert-info">TowApp 컴포넌트-state를 객체로</h3>
            <h3>이름 : <input type="text" name='name' 
            defaultValue={inputs.name}
            onChange={changeData}/></h3>
            <h3>주소 : <input type="text" name='addr' 
            defaultValue={inputs.addr}
            onChange={changeData}/></h3>
            <h3>나이 : <input type="text" name='age' 
            defaultValue={inputs.age}
            onChange={changeData}/></h3>
            <hr/>
            <h2>이름 : {inputs.name},{inputs['name']}</h2>
            <h2>주소 : {inputs.addr},{inputs['addr']}</h2>
            <h2>나이 : {inputs.age},{inputs['age']}</h2>
        </div>
    )
}
export default TwoApp;