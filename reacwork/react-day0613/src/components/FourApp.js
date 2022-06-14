import React,{useState,useRef} from "react";
import '../App.css';

//useRef : 변수 관리하는 기능
//state와의 차이점 : 값이 변경되어도 다시 렌더링하지 않음
const FourApp = () => {
    const [count,setCount] = useState(0);
    //ref선언하는 방법
    const countRef = useRef(0);

    //state 변수 증가하는 함수
    const stateIncre = ()=>{
        setCount(count+1);//누를 때 마다 화면이 다시 렌더링 됨
    }

    //ref 변수 증가하는 함수 state로 렌더링 할 때만 보임
    const refIncre =()=>{
        countRef.current = countRef.current + 1;
        console.log('countRef = ' + countRef.current);
    }

    return (
        <div>
            <h3 className="alert alert-info">FourApp 컴포넌트 -useRef</h3>
            <button type='button' className="btn btn-danger"
            onClick={stateIncre}>state 변수 증가</button>

            <div className="number">{count}</div>
            <hr/>
            <button type="button" className="btn btn-success"
            onClick={refIncre}>ref 변수증가</button>

            <div className="number">{countRef.current}</div>
        </div>
    )
}
export default FourApp;