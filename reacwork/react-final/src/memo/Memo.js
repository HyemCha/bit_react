import * as React from 'react';
import '../App.css';
// import './Memo.scss';
import memberprofile from '../image/cute.png';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios'; //백엔드와 통신할 때 반드시 import 해야 함
import * as rrd from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
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
            console.log("messageList : " + res.data.length);
            console.log("res.data : " + res.data)
            console.dir(res)
            console.dir("res.data"+res.data)
            console.log(res.data[0])
        })
    }
    React.useEffect(()=>{
        list();
    },[]);

    const onInsert = () => {
        axios.post(insertUrl,{nickname,message})
        .then(res => {
            console.log("성공");
            // navi("/memo/list");
        })
    }
    
    return <div>
        <h1>Memo</h1>
        <div className='comment-input-wrap'>
            <input type='text' placeholder='닉네임' style={{width:'130px'}}
            onChange={e=>{
                setNickname(e.target.value);
            }}/>
            <textarea placeholder='내용' style={{width:'600px'}}
            onChange={e=>{
                setMessage(e.target.value);
            }}></textarea>
            <Button
            onClick={()=>{
                onInsert();
            }}>등록</Button>
        </div>

        <div className='comment-wrap'>
            {
                messageList.map((row, idx) => {
                    <MemoRowItem key={idx} idx={idx} row={row}/>
                })
            }
        </div>
    </div>
}

