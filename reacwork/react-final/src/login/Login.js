import * as React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import Logout from './Logout';

const Login = () => {
    let loginok = localStorage.loginok;

    React.useEffect(()=>{

    },[loginok])

    return (
        <div>
            {console.log("loginok",loginok)}
            {
                loginok === 'yes' ? <Logout/> : <LoginForm/> 
            }
            {loginok}
        </div>
    )
}

export default Login;