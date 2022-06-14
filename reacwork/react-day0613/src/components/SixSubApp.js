import React,{useState} from "react";
import '../App.css';

const SixSubApp = (props) => {
    console.dir(props);
    return(//읽기 전용이므로 출력은 가능, 변경은 못 함
        <div>
            <div className="line">{props.name}님의 나이는 {props.age}입니다.</div>
        </div>
    )
}
export default SixSubApp;