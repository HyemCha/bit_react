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
    const [messageList, setMessageList] = React.useState([]);

    const [nickname,setNickname] = React.useState('');
    const [message,setMessage] = React.useState('');

    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return <div>
        <h1>Memo</h1>
        <div className='comment-input-wrap'>
        {/* <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
            <label for="name" class="form__label">Name</label>
        </div> */}
            <input type='text' placeholder='닉네임' style={{width:'130px'}}
            onChange={e=>{
                setNickname(e.target.value);
            }}/>
            <textarea placeholder='내용' style={{width:'600px'}}
            onChange={e=>{
                setMessage(e.target.value);
            }}></textarea>
            <Button>등록</Button>
        </div>

        <div className='comment-wrap'>
            <MemoRowItem/>
        </div>
    </div>
}

