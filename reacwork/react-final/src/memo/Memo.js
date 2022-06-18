import * as React from 'react';
import '../App.css';
// import './Memo.scss';
import Button from '@mui/material/Button';
import axios from 'axios'; //백엔드와 통신할 때 반드시 import 해야 함
import * as rrd from 'react-router-dom';
import MemoRowItem from './MemoRowItem';


export default function Memo(){
    //.env 팡ㄹ에서 전역변수값 가져오기
    // const SPRING_URL = process.env.REACT_APP_SPRING_URL;
    
    const navi = rrd.useNavigate();

    //전송할 데이터
    const [nickname,setNickname] = React.useState('');
    const [message,setMessage] = React.useState('');

    //리스트
    const [messageList, setMessageList] = React.useState([]);

    let getListUrl = "http://localhost:9001/memo/list";
    let insertUrl = "http://localhost:9001/memo/insert";


    const list = () => {
        axios.get(getListUrl)
        .then(res => {
            setMessageList(res.data);
        })
    }
    React.useEffect(()=>{
        list();
        console.log("'message'")
        console.log(messageList)
    },[]);

    const onInsert = () => {
        if(nickname===''||message===''){
            alert("닉네임과 메시지를 모두 입력해주세요!");
            return;
        }
        axios.post(insertUrl,{nickname,message})
        .then(res => {
            console.log("성공");
            navi("/memo/list");
        })
    }

    const onDelete = (num) => {
        let deleteUrl = "http://localhost:9001/memo/delete?num="+num;
        console.log(num)
        console.log("넘어옴delete");
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제 후 목록으로 이동
           console.log("삭제 성콩")
           navi("/memo/list");
        })
       
    }
    
    return <div className='memo-wrap'>
        <h1>Memo&nbsp;&nbsp;<span style={{fontSize:'14px',fontWeight:'normal'}}>메모를 남겨주세요.🌠</span></h1>
        <div className='comment-input-wrap'>
            <input type='text' placeholder='닉네임' style={{width:'130px',outline:'none'}}
            onChange={e=>{
                setNickname(e.target.value);
            }}/>
            <textarea placeholder='내용' style={{width:'600px',outline:'none'}}
            onChange={e=>{
                setMessage(e.target.value);
            }}></textarea>
            <Button
            onClick={()=>{
                onInsert();

            }}>등록</Button>
        </div>
        <div className='comment-wrap'>
            <div className='comments'>
                {
                    messageList.map((row, idx) => (
                        <MemoRowItem key={idx} idx={idx} row={row} listLength={messageList.length} onDelete={onDelete}/>
                    ))
                }
            </div>
        </div>
        
    </div>
}

