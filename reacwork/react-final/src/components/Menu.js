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
    
    return (
        <ul className='menu'>
            <li><NavLink to='/'><HomeIcon sx={{width:'20px'}}/></NavLink></li>
            <li><NavLink to='/memo/list'>Memo</NavLink></li>
            <li><NavLink to='/shop/list'>Shop</NavLink></li>
            <li><NavLink to='/board/list/1'>Board</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/login'>{localStorage.loginok === 'yes' ? <LogoutIcon sx={{width:'20px'}}/> : <LoginIcon sx={{width:'20px'}}/>}</NavLink></li>
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