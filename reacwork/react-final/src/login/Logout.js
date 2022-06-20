import * as React from 'react';
import './Login.css';
import { Button, Result } from 'antd';
import {useNavigate} from 'react-router-dom';

export default function Logout(){
    const title = "안녕하세요! 여기는 로그아웃 창입니다,"+localStorage.getItem('myid')+"님!"
    const navi = useNavigate();

    const [logoutC,setLogoutC] = React.useState(false);

    React.useEffect(()=>{
        console.log("Effect logoutC",logoutC)
    },[logoutC])

    const logout = () => {
        localStorage.removeItem('myid');
        localStorage.loginok=null;
        // setLogoutC(!logoutC)
        // navi("/")
        window.location.reload();
        console.log("logout btn logoutC",logoutC)

    }
    
    return (
        <div className='logout'>
            <h1>Logout</h1>
            {console.log("localStorage.loginok",localStorage.loginok)}
            <Result
                status="success"
                title={title}
                subTitle={title}
                extra={[
                <Button type="primary" key="console"
                onClick={logout}>
                    로그아웃
                </Button>,
                <Button key="buy" onClick={()=>{
                    navi("/")
                }}>메인으로 돌아가기</Button>,
                ]}
            />
        </div>
    )
}
