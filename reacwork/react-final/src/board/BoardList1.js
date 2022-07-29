import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate, useParams,Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

export default function BoardList1(){
    const [data,setData] = React.useState('')
    const navi = useNavigate();

    //현재 페이지 번호 
    const {currentPage} = useParams();

    //url
    let pagelistUrl = process.env.REACT_APP_SPRING_URL + "board/pagelist?currentPage=" + currentPage;
    let photoUrl = process.env.REACT_APP_SPRING_URL + "save/";

    //시작시 호출되는 함수
    const pageList = () => {
        axios.get(pagelistUrl)
        .then(res=>{
            console.log("성콩",res.data)
            setData(res.data);
        })
    }

    React.useEffect(()=>{
        console.log("currentPage",currentPage)
        pageList();
    },[currentPage]); //currentPage가 변경 될 때 마다 다시 호출
    
    return <div className='board-list'>
        <h3 className='alert alert-info'>
            총 {data.totalCount} 개의 게시글이 있습니다.
        </h3>
        <br/>
        <table className='table table-bordered' style={{width:'700px'}}>
            <thead>
                <tr style={{backgroundColor:"#ddd"}}>
                    <th width='50'>번호</th>
                    <th width='300'>제목</th>
                    <th width='80'>작성자</th>
                    <th width='50'>조회</th>
                </tr>
            </thead>
            <tbody>
                {
                    data&&data.list.map((row,idx)=>{
                        return<>
                            <tr>
                                <td>{data.no-idx}</td>
                                <td onClick={()=>{
                                    navi(`/board/detail/${row.num}/${currentPage}`)
                                }} style={{cursor:'pointer'}}>
                                    <img alt='' className='' src={photoUrl+row.photo} width='50'/>
                                    {row.subject}
                                </td>
                                <td>{row.name}</td>
                                <td>{row.readcount}</td>
                            </tr>
                        </>
                    })
                }
            </tbody>
        </table>
        {/* <Pagination count={10} color="secondary" /> */}
        {/* 페이징 */}
        <div style={{width:'700px', textAligh:'center',display:'flex',justifyContent: 'center'}}>
            <ul className='pagination'>
                {(data.startPage>1&&<li><Link to={`/board/list/${data.startPage-1}`}>이전</Link></li>)}
                {
                    data&&data.parr.map(n=>{
                        const url = "/board/list/"+n
                        // data.endPage%5==0?
                        return<li>
                            <Link to={url}><b style={{color:n==currentPage?'red':'black'}}>{n}</b></Link>
                        </li>
                    })
                }
                {(data.endPage<data.totalPage?<li><Link to={`/board/list/${data.endPage+1}`}>다음</Link></li>:'')}
            </ul>
        </div>
    </div>
}