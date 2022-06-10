import { Button, TextField } from "@mui/material";
import React, {useState} from "react";

const ThreeApp = () => {
    const [names,setNames] = useState(['이영자','강호동']);
    const [irum,setIrum] = useState('');
    //추가버튼 이벤트
    const btnInsert = () => {
        if(irum === ''){return;}
        setNames(names.concat(irum));//배열에 이름 데이터 추가
        setIrum('');
    }
    //입력이벤트 (keyup)
    const txtEnter = e=>{
        if(e.key==='Enter'){
            btnInsert();
            e.target.value='';
        }
    }
    //입력이벤트 (change)
    const txtInput = e=>{
        
        setIrum(e.target.value);
    }
    //더블클릭 시 이름 삭제 이벤트
    const dataRemove = index=>{
        console.log(index);
        //방법1 index번지만 빼고 잘라서 넣음
        // setNames([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1,names.length)
        // ]);
        //방법2
        setNames(names.filter((item,i)=>i!==index)); //index번지만 걸러냄
    }
    return(
        <div>
            <h4>ThreeApp  컴포넌트 연습</h4>
            <TextField id="outlined-basic" label="이름입력" variant="outlined" size="small"
            style={{width:'100px'}}
            value={irum}
            onChange={txtInput}
            onKeyUp={txtEnter}/>
            <Button variant="contained" size="medium" color="info"
            style={{marginLeft:'5px'}} onClick={btnInsert}>추가</Button>
            <br/>
            <h5>이름에서 더블클릭하면 삭제됩니다.</h5>
            <ul>
                {
                    names.map((na,index)=>(
                        <li className="data" key={index} onDoubleClick={()=>{
                            dataRemove(index);
                        }}>{na}</li>
                    ))
                }
            </ul> 
        </div>
    )
}
export default ThreeApp;