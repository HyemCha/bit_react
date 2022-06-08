import React,{Component} from "react";
import './MyStyle.css';
import img1 from '../image/K-045.png';

let helloElement = <h1>Hello Element!</h1>
// export default class SecondApp extends React.Component
export default class SecondApp extends Component{ //Component 임포트하면 React 생략 가능
    //생성자
    constructor(){
        super();
        console.log("생성자 호출");
    }

    render(){ //여기 안에 줘야함
        const imgStyle = {
            border : '3px solid pink',
            borderRadius:'100px',
            width:'130px'
        }
        return (
            <div>
                <h1 style={{fontFamily:'Hahmlet',fontSize:'3em'}}>SecondApp 입니다.</h1>
                <img src={img1} style={imgStyle}/>
                {helloElement}
                {helloElement}
            </div>
        )
    }
}