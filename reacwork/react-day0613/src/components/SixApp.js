import React,{useState} from "react";
import '../App.css';
import SixSubApp from './SixSubApp';
import SixSubApp2 from "./SixSubApp2";
import SixSubApp3 from "./SixSubApp3";

const SixApp = () => {
    const [number,setNumber] = useState(10);
    //증가하는 이벤트 함수
    const numberIncre = () => {
        setNumber(number + 1);
    }

    //감소하는 이벤트 함수 
    const numberDecre = () => {
        setNumber(number - 1);
    }
    return(
        <div>
            <h3>SixApp - 부모, 자식 컴포넌트간 통신</h3>
            <SixSubApp name="캔디" age="23"></SixSubApp>
            <SixSubApp name="마징가" age="29"></SixSubApp>
            <SixSubApp name="테리우스" age="31"></SixSubApp>
            <SixSubApp2 flower='장미꽃' price='12000' linecolor="red"/>
            <SixSubApp2 flower='국화꽃' price='17000' linecolor="green"/>
            <SixSubApp2 flower='안개꽃' price='26000' linecolor="pink"/>
            <br/>
            <div className="number">{number}</div>
            <SixSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    )
}
export default SixApp;