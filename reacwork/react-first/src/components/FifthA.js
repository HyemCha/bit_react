import React, { useState } from "react";
import './MyStyle.css';

const FifthA = ()=>{
    const [name,setName] = useState('');
    const [java,setJava] = useState(0);
    const [spring,setSpring] = useState(0);
    const [total,setTotal] = useState(0);
    const [avg,setAvg] = useState(0);

    return(
        <div>
            <h2 className="alert alert-info">FifthA 입니다</h2>
            <div className="inp">
                이름 : <input type='text' style={{width:'100px'}}
                onChange={e=>{
                    setName(e.target.value);
                }}/><span style={{marginLeft:'10px'}}>{name}</span>
                <br/>
            
                자바 : <input type='text' style={{width:'100px'}}
                onChange={e=>{
                    setJava(e.target.value);
                }}/><span style={{marginLeft:'10px'}}>{java}</span>
                <br/>
            
                스프링 : <input type='text' style={{width:'100px'}}
                onChange={e=>{
                    setSpring(e.target.value);
                }}/><span style={{marginLeft:'10px'}}>{spring}</span>
                <br/>
                <br/>
                <button type="button" onClick={()=>{
                    setTotal(Number(java)+Number(spring));
                    setAvg((Number(java)+Number(spring))/2);

                    //값 지우기
                    // setName('');
                    // setJava(0);
                    // setSpring(0);
                }}>결과 확인</button>
            </div>
            <div className="result">
                이름 : {name}<br/>
                자바 : {java} 점<br/>
                스프링 : {spring} 점<br/>
                총점 : {total} 점<br/>
                평균 : {avg} 점<br/>
            </div>
        </div>
    )
}
export default FifthA;