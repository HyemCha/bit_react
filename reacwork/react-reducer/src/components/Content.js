import * as React from 'react';
import '../App.css'
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Content = () => {
    const {isDark} = React.useContext(ThemeContext);
    const name = React.useContext(UserContext);
    return (
        <div className='content' style={{backgroundColor:isDark?'#b8ffaf':'white'}}>
            <p>{name}님.. 즐거운 하루 되세요!!!</p>
        </div>
    );
};

export default Content;