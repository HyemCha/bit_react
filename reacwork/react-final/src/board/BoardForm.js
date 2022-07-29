import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import catimg from '../image/서있는 고양이.jpeg'

export default function BoardForm(){
    const [photo, setPhoto] = React.useState('');
    const [subject,setSubject] = React.useState('');
    const [content, setContent] = React.useState('');

    const navi = useNavigate();

    let loginok = localStorage.loginok;
    let id = localStorage.myid;

    const uploadUrl = process.env.REACT_APP_SPRING_URL + "board/upload"
    const insertUrl = process.env.REACT_APP_SPRING_URL + "board/insert"
    const photoUrl = process.env.REACT_APP_SPRING_URL + "save/"

    const initFunc = () => {
        if(loginok !== 'yes'){
            alert("먼저 로그인 후 글을 작성해주세요")
            navi("/login")
        }
    }


    //file change 시 호출 이벤트
    const uploadImage = e => {
        const uploadFile = e.target.files[0]; 
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); //첫번째 인자가 스프링으로 넘어가는 애

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'} //뭐 어쩌구저쩌구라 이거롤 바꿔줘야 ㅏㅁ
        }).then( res => { //파일을 여기로 보냄
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch( err => {
            alert(err);
        });
    }

    //submit 이벤트
    const onSubmitInsert = e => {
        e.preventDefault();

        axios.post(insertUrl,{id,photo,subject,content})
        .then(res=>{
            navi("/board/list/1");
        })
    }

    // const insertData = (values) => {
        
    //     console.log('Received values of form: ', values);
    //     axios.post(insertUrl)
    //     .then(res=>{
    //         console.log("insert 성공")
    //     })
    // }


    React.useEffect(()=> {
        initFunc();
    },[])



    return <div className='boartForm'>
            <img alt='' src={photoUrl+photo} className='imgphoto'/>
            <form onSubmit={onSubmitInsert}>
                <table className='table table-bordered' style={{width:'400px'}}>
                    <caption><h3>게시판 글쓰기</h3></caption>
                    <tbody>
                        <tr>
                            <th style={{backgroundColor:'#ddd'}}>아이디</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd'}}>이미지</th>
                            <td>
                                <input type='file' className='form-control' style={{width:'250px'}} required
                                onChange={uploadImage}/>

                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd'}} widht='100'>제목</th>
                            <td>
                                <input name='subject' type='text' className='form-control' style={{width:'300px'}} required
                                onChange={e=>{
                                    setSubject(e.target.value)
                                }}/>

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea name='content' className='form-control' required
                                style={{width:'480px',height:'120px'}}
                                onChange={e=>{
                                    setContent(e.target.value)
                                }}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align='center'>
                                <button type="submit" className='btn btn-info'
                                >게시글 작성</button>
                                <button type='button' className='btn btn-success'
                                style={{marginLeft:'10px'}}
                                onClick={()=>{
                                    navi("/board/list")
                                }}>게시판 메인</button>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </form>
    </div>
}