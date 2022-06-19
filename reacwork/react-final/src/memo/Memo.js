import * as React from 'react';
import '../App.css';
// import './Memo.scss';
import Button from '@mui/material/Button';
import axios from 'axios'; //백엔드와 통신할 때 반드시 import 해야 함
import * as rrd from 'react-router-dom';
import MemoRowItem from './MemoRowItem';
import {useNavigate} from 'react-router-dom';

export default function Memo(){
    const navi = useNavigate();

    //전송할 데이터
    const [nickname,setNickname] = React.useState('닉네임');
    const [message,setMessage] = React.useState('내용');
    const [insertOk,setInsertOk] = React.useState(false);

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
        console.log("callback insertOk : " + insertOk)
        console.log("ue nickname:"+nickname+"/message:"+message);

        return()=>{
            setInsertOk(!insertOk);
            console.log("return insertOk : " + insertOk)
        }
    },[insertOk]);

    const onInsert = () => {
        if(nickname==='닉네임'||message==='내용'){
            alert("닉네임과 메시지를 모두 입력해주세요!");
            return;
        }
        axios.post(insertUrl,{nickname,message})
        .then(res => {
            console.log("성공");
            setNickname('닉네임');
            setMessage('내용');
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
           list();
        })
       
    }
    
    return <div className='memo-wrap'>
        <h1>Memo&nbsp;&nbsp;<span style={{fontSize:'14px',fontWeight:'normal'}}>메모를 남겨주세요.🌠</span></h1>
        <div className='comment-input-wrap'>
            <div className='memo-nickname-wrap'>
                <input className='memo-text' type='text' placeholder={nickname} style={{width:'130px',outline:'none'}}
                onChange={e=>{
                    setNickname(e.target.value);
                }}/>
            </div>
            <div className='memo-message-wrap'>
                <textarea cols='80' rows='1' className='memo-text' placeholder={message} style={{marginTop:'4px',outline:'none',resize:'none'}}
                onChange={e=>{
                    setMessage(e.target.value);
                }}></textarea>
            </div>
            
            <Button sx={{height:'35px'}} variant="outlined" href="#outlined-buttons"
            onClick={()=>{
                setInsertOk(!insertOk); //true
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

