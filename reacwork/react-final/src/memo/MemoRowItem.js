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

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  
    return Array.from(new Array(50)).map(
      () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function MemoRowItem(props){
    // const [value, setValue] = React.useState(0);
    // const ref = React.useRef(null);
    // const [messages, setMessages] = React.useState(() => refreshMessages());

    // React.useEffect(() => {
    //     ref.current.ownerDocument.body.scrollTop = 0;
    //     setMessages(refreshMessages());
    // }, [value, setMessages]);

    return (
        <div className='memo-row-wrap'>
            
        </div>

        // <List>
        //     {messages.map(({ primary, secondary, person }, index) => (
        //     <ListItem button key={index + person}>
        //         <ListItemAvatar>
        //         <Avatar alt="Profile Picture" src={person} />
        //         </ListItemAvatar>
        //         <ListItemText primary={primary} secondary={secondary} />
        //     </ListItem>
        //     ))}
        // </List>
    );
}

const messageExamples = [
    {
      primary: '닉네임',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: {memberprofile},
    },
  ];