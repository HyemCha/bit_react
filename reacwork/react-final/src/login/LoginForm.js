import * as React from 'react';
import './Login';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import ErrorList from 'antd/lib/form/ErrorList';

export default function LoginForm(){
    const [id, setId] = React.useState('');
    const [pass, setPass] = React.useState('');
    const navi = useNavigate();

    // const onSubmit = e => {
    //     e.preventDefault();
        
    //     const url = process.env.REACT_APP_SPRING_URL + "member/login";
    //     axios.post(url,{id,pass})
    //     .then(res => {
    //         if(res.data === 0){
    //             console.log('id',id)
    //             console.log('pass',pass)
    //             alert("아이디 또는 비밀번호가 맞지 않습니다")
    //         }else{
    //             localStorage.loginok='yes';
    //             localStorage.myid=id;
    //             window.location.reload(); //새로고침
    //         }
    //     })
    // }

//ant form
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const url = process.env.REACT_APP_SPRING_URL + "member/login";
        
        axios.post(url,{id,pass})
        .then(res => {
            if(res.data === 0){
                console.log('id',id)
                console.log('pass',pass)
                alert("아이디 또는 비밀번호가 맞지 않습니다")
            }else{
                localStorage.loginok='yes';
                localStorage.myid=id;
                window.location.reload(); //새로고침
            }
        })
    };
    return (
        <div>
            <h1>LoginForm</h1>
            <div className='loginform'>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onSubmit={onSubmit}
                >
                    <Form.Item
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="아이디" 
                        onChange={e=>{
                            setId(e.target.value)
                        }}/>
                    </Form.Item>
                    <Form.Item
                        name="pass"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="비밀번호"
                        onChange={e=>{
                            setPass(e.target.value);
                        }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                        비밀번호 찾기
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        또는 <a href="/member/form">가입하기</a>
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    )
}
