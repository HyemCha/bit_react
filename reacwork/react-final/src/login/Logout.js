import * as React from 'react';
import './Login.css';
import { Button, Result } from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Logout(){
    const [logoutC,setLogoutC] = React.useState(false);
    const [name, setName] = React.useState('');
    
    const title = name + "(" + localStorage.getItem('myid')+")님, 안녕하세요! 여기는 로그아웃 창입니다!"
    let id;
    const navi = useNavigate();


    // React.useEffect(()=>{
    //     console.log("Effect logoutC",logoutC)
    // },[logoutC])

    React.useEffect(()=>{
        initFunc();
    },[])

    const initFunc = () => {
        id = localStorage.myid;
        const url = process.env.REACT_APP_SPRING_URL + "member/getName?id=" + id;
        axios.get(url)
        .then(res => {
            console.log("name 도착!",res.data)
            setName(res.data)
        })
        .catch(err=>{
            console.log("시루패")
            console.log(err)
        })
    }

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
