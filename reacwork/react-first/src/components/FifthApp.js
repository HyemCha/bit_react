import React, { useState } from "react";

const Fifth = () => {
    const [message,setMessage] = useState('');
    const [name1,setName1] = useState('');
    const [java1,setJava1] = useState('');
    const [spring1,setSpring1] = useState('');
    const [total1,setTotal1] = useState('');
    const [avg1,setAvg1] = useState('');
    const [name,setName] = useState('');
    const [java,setJava] = useState('');
    const [spring,setSpring] = useState('');
    const [total,setTotal] = useState('');
    const [avg,setAvg] = useState('');
    const inputStyle = {
        width:'100px',
        marginLeft:'10px',
        borderRight:'none',
        borderTop:'none',
        borderLeft:'none',
        borderBottom:'1px solid black'
    }
    const spanStyle = {
        width:'60px'
    }
    const btnStyle = {
        width:'180px',
        marginTop:'10px',
        backgroundColor:'pink'
    }
    return (
        <div>
            <h3>FifthApp입니다람쥐</h3>
            <div style={{display:'flex'}}>
                <div style={{display:'flex',flexDirection:'column',width:'250px'}}>
                    <div>
                        <span style={spanStyle}>이&nbsp;&nbsp;&nbsp;&nbsp;름</span>
                        <input style={inputStyle} type="text" onChange={event => {
                            setName1(event.target.value);
                        }}/>&nbsp;&nbsp;{name1}
                    </div>
                    
                    <div>
                        <span>자&nbsp;&nbsp;&nbsp;&nbsp;바</span>
                        <input style={inputStyle} type="text" onChange={event => {
                            setJava1(event.target.value);
                        }}/>&nbsp;&nbsp;{java1}
                    </div>
                    
                    <div>
                        <span>스프링</span>
                        <input style={inputStyle} type="text" onChange={event => {
                            setSpring1(event.target.value);
                        }}/>&nbsp;&nbsp;{spring1}
                    </div>
                    
                    <button style={btnStyle} type="button" onClick={()=>{
                        setName(name1);
                        setJava(java1);
                        setSpring(spring1);
                        setTotal(Number(java1)+Number(spring1));
                        setAvg((Number(java1)+Number(spring1))/2);
                        setName1('');
                        setJava1('');
                        setSpring1('');
                    }}>결과 확인</button>
                </div>
                <div style={{border:'1px solid gray',width:'100px'}}>
                    <span>이름 : {name}</span>
                    <br></br>
                    <span>자바 : {java}</span>
                    <br></br>
                    <span>스프링 : {spring}</span>
                    <br></br>
                    <span>총점 : {total}</span>
                    <br></br>
                    <span>평균 : {avg}</span>
                </div>
            </div>
        </div>
    )
}
export default Fifth;