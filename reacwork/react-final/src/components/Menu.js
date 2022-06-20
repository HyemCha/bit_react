import * as React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import memberprofile from '../image/cute.png';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const Menu = () => {
    
    const [id,setId] = React.useState(localStorage.getItem('myid'))
    const [name,setName] = React.useState(null);

    const getNameUrl = process.env.REACT_APP_SPRING_URL + "member/getName?id=" + id;

    axios.get(getNameUrl)
    .then(res => {
        console.log("name 도착!",res.data)
        setName(res.data)
    })
    .catch(err=>{
        console.log("시루패")
        console.log(err)
    })

    return (
        <ul className='menu'>
            <li><NavLink to='/'><HomeIcon/></NavLink></li>
            <li><NavLink to='/memo/list'>Memo</NavLink></li>
            <li><NavLink to='/shop/list'>Shop</NavLink></li>
            <li><NavLink to='/board/list'>Board</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/login'>{localStorage.loginok === 'yes' ? <span>{name}({localStorage.getItem('myid')})</span> : <LoginIcon/>}</NavLink></li>
            <li><NavLink to='/member/form'>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src={memberprofile} />
                    </Stack>
                </NavLink>
            </li>
        </ul>
    )
}

export default Menu;