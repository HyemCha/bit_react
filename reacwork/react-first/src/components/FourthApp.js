import React,{useState} from "react";

const FourthApp = () => {
    const [name,setName] = useState('김말이');
    const [age,setAge] = useState(23);

    return (
        <div>
            <h2 className="alert alert-danger">FourthApp입니다람쥐
            <img src="../s5.JPG" alt="" className="img-circle" style={{width:'40px'}}/>
            </h2>
            <b style={{fontSize:'30px',fontFamily:'Single Day'}}>
                이름 : {name} / 나이 : {age}세
            </b>
            <br></br>
            <button type="button" className="btn btn-default"
            style={{marginLeft:'100px'}} onClick={()=>{
                setName("강호동");
                setAge(30);
            }}>값 변경</button>
            <button type="button" className="btn btn-default"
            style={{marginLeft:'10px'}} onClick={()=>{
                setName('');
                setAge(0);
            }}>초기화</button>
        </div>
    )
}

export default FourthApp;