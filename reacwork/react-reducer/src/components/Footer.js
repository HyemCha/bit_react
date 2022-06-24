import * as React from 'react';
import '../App.css'
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark,setIsDark} = React.useContext(ThemeContext);
    return (
        <footer className='footer' style={{backgroundColor:isDark?'#ffbfe7':'#e2e2e2'}}>
            <button type='button' className='button'
            onClick={()=>{
                setIsDark(!isDark); //Root의 state를 업데이트
            }}>Color Mode</button>
        </footer>
    );
};

export default Footer;