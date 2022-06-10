import React, {useState} from "react";
import Alert from '@mui/material/Alert';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { color } from "@mui/system";


const OneApp = () => {
    //배열 변수 선언
    const names = ['이미자','강호동','이영자','유재셕','김숙'];
    //반복문을 변수에 저장 후 출력해도 됨
    const nameList = names.map((name) => (<li>{name}</li>))//한 줄일 때는 자동 리턴

    //색상을 배열로
    const colors = ['red','green','orange','gray','pink','magenta','cyan','yellow'];
    return(
        <div>
            <Alert severity="error" style={{fontSize:'20px'}}>OneApp  컴포넌트 연습</Alert>
            <span class="material-icons-outlined">favorite</span>
            <span class="material-icons-outlined">savings</span>

            <div>
                <h3>map 반복문 연습</h3>
                <ol>{nameList}</ol>
                <hr></hr>
                <ul>
                    {
                        names.map((name,index) => (<b style={{marginLeft:'10px'}}>{index}:{name}</b>))
                    }
                </ul>
                <hr/>
                <div className="box-wrap">
                    {colors.map((color)=>(<div className="box" style={{backgroundColor:color}}></div>))}
                </div>
            </div>
        </div>
    )
}
export default OneApp;