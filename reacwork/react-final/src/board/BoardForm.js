import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BoardForm(){
    const navi = useNavigate();
    let loginok = localStorage.loginok;
    let id = localStorage.myid;

    const initFunc = () => {
        if(loginok == null){
            alert("먼저 로그인 후 글을 작성해주세요")
            navi("login")
        }
    }

    React.useEffect(()=> {
        initFunc();
    },[])

    return <div>
            <form>
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
                                <input type='file' className='form-control' style={{width:'250px'}} required/>

                            </td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd'}} widht='100'>제목</th>
                            <td>
                                <input type='text' className='form-control' style={{width:'300px'}} required/>

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea className='form-control' required
                                style={{width:'480px',height:'120px'}}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align='center'>
                                <button type="submit" className='btn btn-info'>게시글 작성</button>
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