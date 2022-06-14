import * as React from 'react';
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//색상을 배열로 저장 후 원모양으로 가로방향으로 나오도록 출력
const EightSubApp2 = (props) => {
    const [c,setC] = React.useState(null);
    const changeC = ()=>{
        props.addCo(c); //button onClick에서 바로 호출하면 안 됨. 오류남
    }
    return (
        <div style={{width:'500px'}}>
            <h4>EightSubApp2 컴포넌트 입니다.</h4>
            <div>
                <b>색상 선택 : </b>
                <input type='color' defaultValue='#fff' 
                style={{width:'100px'}} onChange={e=>{
                    setC(e.target.value);
                }}/>
                <button type='button' onClick={changeC}>add</button>
            </div>
        </div>
    )
}

export default EightSubApp2;