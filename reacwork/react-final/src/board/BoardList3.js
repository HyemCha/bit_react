import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

export default function BoardList3(){

    const [dataList, setDataList] = React.useState(null);
    const navi = useNavigate();
    let {currentPage} = useParams();

    const listUrl = process.env.REACT_APP_SPRING_URL + "board/alllist";

    const list = () => {
        axios.get(listUrl)
        .then(res=>{
            setDataList(res.data)
        })
    }

    React.useEffect(()=>{
        list();
    },[])

    function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
    }

    return <div style={{margin:'30px auto',width:'700px',display:'flex',flexDirection:'column', alignItems:'center'}}>
        {/* <h1>BoardList3</h1> */}
            {dataList&&dataList.map((data,idx)=>
                (
                <div className='list3-wrap' style={{borderBottom:'1px solid lightgray', padding:'15px',width:'700px'}}>
                    <span style={{cursor:'pointer'}} 
                    onClick={()=>{
                        navi(`/board/detail/${data.num}/${currentPage}`)
                    }}><strong style={{fontSize:'18px'}}>{data.subject}</strong></span> 
                    <div style={{color:'gray', fontSize:'13px',marginTop:'15px'}}>
                        <span style={{fontSize:'13px'}}>{data.name}</span> 
                        <span style={{margin:'0 6px'}}>-</span> 
                        <time style={{marginRight:'6px',letterSpacing: '-0.02em',fontSize:'12px'}}>{timeForToday(data.writeday)}</time>
                        <span>조회수&nbsp;{data.readcount}</span>
                    </div>
                </div>
            ))}
    </div>
}