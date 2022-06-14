import React,{useState} from "react";
import '../App.css';

const SixSubApp2 = ({flower,price,linecolor}) => {
    return(//읽기 전용이므로 출력은 가능, 변경은 못 함
        <div>
            <div className="line" style={{borderColor:linecolor}}>
                {flower} 1단의 가격은 {price}입니다.
            </div>
        </div>
    )
}
export default SixSubApp2;