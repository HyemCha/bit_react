import * as React from 'react';
import '../App.css'
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
import Page from './Page';

const Root = () => {
    const [isDark, setIsDark] = React.useState(false);
    return (
        //value의 값들은 Page의 모든 하위 컴포넌트에서 props 전달 없이 사용가능
        <UserContext value={'한가인'}>
            <ThemeContext.Provider value={{isDark,setIsDark}}>
                <Page/>
            </ThemeContext.Provider>
        </UserContext>
        
    );
};

export default Root;