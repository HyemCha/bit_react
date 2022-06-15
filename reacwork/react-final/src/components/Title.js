import * as React from 'react';
import '../App.css';
import titleimg from '../image/sitebanner.jpg'
import {NavLink} from 'react-router-dom';

const Title = () => {
    return (
        <div>
            <NavLink to='/'><img src={titleimg} style={{width:'100%'}}/></NavLink>
        </div>
    )
}

export default Title;