import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import Button from '@mui/material/Button';

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
  } from 'antd';
  import { useState } from 'react';
  const { Option } = Select;
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  

const Member = () => {
    
    const navi = useNavigate();
    const [data,setData] = React.useState({
        id:'',
        name:'',
        pass:'',
        email:'',
        hp:'',
        addr:'',
        emailok:false
    });

    const [passOk, setPassOk] = React.useState(false);
    const [email1, setEmail1] = React.useState('');
    const [email2, setEmail2] = React.useState('');
    const [btnOk, setBtnOk] = React.useState(false);
    const [emailOk, setEmailOk] = React.useState(false);

    //submit 시 호출 될 함수
    const onSave = (e) => {
        e.preventDefault(); //기본 이벤트를 무효화. 여기선 action무효화
        console.dir(data);
        
        console.log("email",email1+email2)

        if(!btnOk){
            alert("아이디 중복체크를 해주세요");
            return;
        }
        if(!passOk){
            alert("비밀번호 확인을 해주세요")
            return;
        }

        if(!data.emailok){
            alert("이메일 중복 버튼을 눌러주세요")
            return;
        }


            const url = process.env.REACT_APP_SPRING_URL + "member/insert";
            axios.post(url, data)
            .then(res => {
                // alert("insert 성공");
                navi("/login");
            })

    }

    //data 관련 데이터 입력 시 호출
    const onDataChange = (e) => {
        const {name,value} = e.target;
        //이벤트 발생 name이 pass일 경우 무조건 passOk는 flase
        if(name==='pass'){
            setPassOk(false);
        }
        setData((prevState)=>{
            return({...prevState,[name]:value})
        })
    }

    //이메일 select변경시 호출
    const onEmailChange = (e) => {
        const {value} = e.target;
        console.log(value);
        if(value===''){
            setEmail2('');
        }else{
            setEmail2(value);
        }
    }
    
    //두번째 pass 입력 시 호출
    const onPassChange = (e) => {
        const {value} = e.target;
        if(value===data.pass)
            return setPassOk(true);
        return setPassOk(false);
    }



    //아이디 중복 체크 이벤트
    // const onIdJungbok = () => {
    //     const url = process.env.REACT_APP_SPRING_URL + "member/idcheck?id=" + data.id;

    //     axios.get(url)
    //     .then(res => {
    //         if(res.data === ""){
    //             setBtnOk(true);
    //             alert("가입 가능한 아이디 입니다.");
    //         } else {
    //             alert("이미 사용중인 아이디 입니다.")
    //             setData(prevState=>{
    //                 return({...prevState,id:''})
    //             })
    //         }

    //     })
    //     console.dir(data)
    // }

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const url = process.env.REACT_APP_SPRING_URL + "member/insert";
        axios.post(url, values)
        .then(res => {
            // alert("insert 성공");
            navi("/login");
        })
    };
    
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

        const onIdJungbok = (e) => {
            const url = process.env.REACT_APP_SPRING_URL + "member/idcheck?id=" + data.id;
            if (data.id!=='') {
                axios.get(url)
                .then(res => {
                    if (res.data===0) {
                        setBtnOk(true);
                    } else {
                        setBtnOk(false);
                        setData(prevState=>{
                            return({...prevState,id:''})
                        })
                        alert("이미 사용중인 아이디 입니다.")
                    }
                })
            } else {
                alert('아이디를 입력 후 중복체크 해주세요');
            }
        }

        return (
            <div>
                <h1>Member</h1>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    >
                    <Form.Item
                        name="id"
                        label="아이디"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your 아이디!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="이메일"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="pass"
                        label="비밀번호"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="비밀번호 확인"
                        dependencies={['pass']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('pass') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="이름"
                        tooltip="다른 사람들에게 불리고 싶은 이름을 써주시든가"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="addr"
                        label="주소"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="ph"
                        label="번호"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                        본 사이트의 약관에 <a href="">동의합니다.</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        가입하기
                        </Button>
                        <Button
                        onClick={()=>navi("/member/list")}>
                        회원목록
                        </Button>
                    </Form.Item>
                </Form>
            
        </div>
    )
}

export default Member;