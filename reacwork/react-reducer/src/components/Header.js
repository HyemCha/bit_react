import * as React from 'react';
import '../App.css'
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const {isDark} = React.useContext(ThemeContext);
    const userName = React.useContext(UserContext);

    return (
        <header className='header'
        style={{backgroundColor:isDark?'#b2cfff':'#fffb98'}}>
            <h1>Welcome! {userName}님!</h1>
        </header>
    );
};

export default Header;