import React, { useState } from "react";
import './MyStyle.css';
import img1 from '../image/K-045.png';
import FourthApp from "./FourthApp";
import Fifth from "./FifthApp";
import FifthA from "./FifthA";

const ThirdApp = () => {
    const imgStyle = {
        width:'100px',
        border:'1px solid gray',
        borderRadius:'12px'
    }
    //상태관리를 위한 변수 설정
    const [message,setMessage] = useState('Happy Day');

    //이벤트 함수
    const handleEnter = e => {
        if(e.key === 'Enter'){
            setMessage(''); //message 변수값 지우기
            e.target.value=''; //입력값 지우기
        }
    }
    return(
        <div>
            <h2 style={{fontFamily:'Dongle'}}>ThirdApp입니다용</h2>
            <h3 style={{color:'red'}}>{message}</h3>
            <hr/>
            <h4>
                메세지를 입력해보세용가리🐲
            </h4>
            <input type="text" style={{width:'300px',fontSize:'2em'}} 
            defaultValue={message} onChange={e=>{
                
                //console.log(e.target.value); //입력한 값
                //message 변수에 입력값 넣기
                setMessage(e.target.value);
            }}
            onKeyUp={handleEnter}/>
            <hr></hr>
            <div>
                {/* <img src={img1} style={imgStyle}/>
                <img src="../s5.JPG" style={imgStyle}/> */}
            </div>
            <FourthApp/>
            여기까지 ThirdApp 구간
            <hr></hr>
            <Fifth/>
            <hr/>
            <FifthA/>
        </div>
    )
}

export default ThirdApp;