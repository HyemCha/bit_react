import * as React from 'react';
import '../App.css';
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ShopDetail = () => { 
    const [open, setOpen] = React.useState(false);

    const navi = useNavigate();
    const {num} = useParams();
    const [data,setData] = React.useState('');
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //url 등록
    let detailUrl = "http://localhost:9001/shop/detail?num="+num;
    let photoUrl = "http://localhost:9001/save/";
    let deleteUrl = "http://localhost:9001/shop/delete?num="+num;

    //스프링으로부터 num에 해당하는 data 받기
    const onDataReceive = () => {
        axios.get(detailUrl)
        .then(res => {
            console.log(res.data);
            console.log("res.data.sangpum"+res.data.sangpum);
            setData(res.data);
        })
    }

    //처음 렌더링 시 위의 함수 호출
    React.useEffect(() => {
        onDataReceive();
    },[])

    //삭제시 호출할 함수
    const onDelete = () => {
        console.log("delete");
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제 후 목록으로 이동
            navi("/shop/list");
        })
        handleClose(); //다이얼로그 닫기
    }

    return (
        <div className='shopDetail'>
            {/* <h1>{idx}</h1> */}
            <div className='detail-top'>
                <div className='sangpum-photo'>
                    <img alt='' src={photoUrl + data.photo}/>
                </div>
                <div className='sangpum-detail'>
                    <span>상품명 : {data.sangpum}</span>
                    <span>수량 : {data.su}</span>
                    <span>단가 : {data.dan}</span>
                    <span>입고일 : {data.ipgoday}</span>
                </div>
            </div>
            <div className='detail-bottom'>
                <Button variant="outlined" 
                onClick={()=>{
                    navi("/shop/list")
                }}>목록</Button>
                <Button variant="outlined" 
                onClick={()=>{
                    navi("/shop/form")
                }}>상품추가</Button>
                <Button variant="outlined" >수정</Button>
                <Button variant="outlined" onClick={handleClickOpen}>삭제</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"상품 삭제 확인"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {data.sangpum}을 삭제하시겠습니까?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>취소</Button>
                        <Button onClick={onDelete} autoFocus>
                            확인
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default ShopDetail;