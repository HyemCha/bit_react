import React,{useState} from "react";
import '../App.css';

const SixSubApp3 = ({incre,decre}) => {
    return(//읽기 전용이므로 출력은 가능, 변경은 못 함
        <div>
            <div>
                <button type="button" className="btn btn-info"
                style={{marginLeft:'60px'}}
                onClick={()=>{
                    decre(); //부모 컴포넌트의 이벤트 발생
                }}>감소</button>
                <button type="button" className="btn btn-info"
                style={{marginLeft:'5px'}}
                onClick={()=>{
                    incre();
                }}>증가</button>
            </div>
        </div>
    )
}
export default SixSubApp3;