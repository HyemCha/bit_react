import React,{useState} from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp = () => {
    const [board, setBoard] = useState([
        {
            name:'짱구',
            photo:'s2',
            blood:'AB',
            today:new Date()
        },
        {
            name:'흰둥이',
            photo:'s1',
            blood:'A',
            today:new Date()
        },
        {
            name:'짱아',
            photo:'s6',
            blood:'O',
            today:new Date()
        }
    ])
    //데이터 삭제하는 함수 이벤트
    const deleteRow = idx => {
        setBoard(board.filter((data,i)=>i!==idx))
    }
    //데이터 추가하는 함수 이벤트
    const dataSave = data=>{
        setBoard(board.concat({
            ...data,
            today:new Date()
        }));

    }

    return(

        <div>
            <h3 className="alert alert-info">SevenApp 컴포넌트 입니다.</h3>
            <WriteForm onSave={dataSave}/>
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><b>Board 배열 출력</b></caption>
                <thead>
                    <th width='100'>이름</th>
                    <th width='110'>사진</th>
                    <th width='70'>혈액형</th>
                    <th width='100'>날짜</th>
                    <th width='70'>삭제</th>
                </thead>
                <tbody>
                    {
                        board.map((row,idx)=>(<RowItemApp idx={idx} row={row} key={idx} onDelete={deleteRow}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default SevenApp;