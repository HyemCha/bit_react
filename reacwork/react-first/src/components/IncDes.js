import React, {useState} from "react";

const IncDes = () => {
    const [num,setNum] = useState(0);
    console.log(...useState(0))
    return (
        <div>
            <h2 className="alert alert-info">증가 감소 연습 문제</h2>
            <div className="incdes" style={{display:'flex', flexDirection:'column'}}>
                <div style={{width:'100px', textAlign:'center',fontSize:'30px'}}>
                    {num}
                </div>
                <div style={{width:'100px', textAlign:'center',fontSize:'30px'}}>
                    <button className="btn btn-default" onClick={()=>{
                        setNum(Number(num)-1);
                    }}>-1</button>
                    <button className="btn btn-default" onClick={()=>{
                        setNum(Number(num)+1);
                    }}>+1</button>
                </div>
            </div>
        </div>
    )
}
export default IncDes;