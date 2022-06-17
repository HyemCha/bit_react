import * as React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios'; //백엔드와 통신할 때 반드시 import 해야 함
import * as rrd from 'react-router-dom';

const ShopUpdateForm = () => {

    const [photo, setPhoto] = React.useState('');
    const [sangpum, setSangpum] = React.useState('');
    const [su, setSu] = React.useState(0);
    const [dan,setDan] = React.useState(0);

    const navi = rrd.useNavigate();

    const {num} = rrd.useParams();

    //url 등록
    let uploadUrl = "http://localhost:9001/shop/upload";
    let photoUrl = "http://localhost:9001/save/"; //파일명 붙일 거라 '/' 붙임
    let updateUrl = "http://localhost:9001/shop/update";
    let detailUrl = "http://localhost:9001/shop/detail?num="+num;

    
    const receiveData = () => {
        axios.get(detailUrl)
        .then(res => {
            console.log(res.data);
            console.log("update num:"+num);
            setPhoto(res.data.photo);
            setSangpum(res.data.sangpum);
            setSu(res.data.su);
            setDan(res.data.dan);
            console.log(res.data.photo)
        })
    }

    React.useEffect(() => {
        receiveData();
    },[])

    // file change 시 호출 이벤트
    const uploadImage = e => {
        const uploadFile = e.target.files[0]; 
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); //첫번째 인자가 스프링으로 넘어가는 애

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'} //뭐 어쩌구저쩌구라 이거롤 바꿔줘야 ㅏㅁ
        }).then( res => { //파일응ㄹ 여기로 보냄
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch( err => {
            alert(err);
        });
    }

    const onUpdate = () => {
        axios.post(updateUrl,{num,sangpum,su,dan})
        .then(res => {
            //insert 성공 후 처리할 코드들
            //목록으로 이동
            navi("/shop/detail/"+num);
        })
    }


    return (
        <div className='shopForm'>
            
        <h1>{num}</h1>
            <table className='' style={{width:'600px', border:'1px solid gray'}}>
                <caption><b>상품 수정 (상품번호 : {num})</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fef'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className='' value={sangpum} style={{width:'250px'}}
                            onChange={e=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fef'}}>상품사진</th>
                        <td width='300'>
                            <input type='file' className='' style={{width:'250px'}}
                            onChange={uploadImage}/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fef'}}>수  량</th>
                        <td width='300'>
                            <input type='text' className='' value={su} style={{width:'120px'}}
                            onChange={e=>{
                                setSu(e.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fef'}}>단  가</th>
                        <td width='300'>
                            <input type='text' className='' value={dan} style={{width:'150px'}}
                            onChange={e=>{
                                setDan(e.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr style={{height:'150px'}}>
                        <td colSpan='2'>
                            <img src={photoUrl+photo} style={{width:'120px',marginLeft:'130px'}}/>
                        </td>
                        <td >    
                            {/* <Button variant="outlined"
                            onClick={onInsert}>등록</Button> */}
                            <button type="button"
                            onClick={onUpdate}>등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopUpdateForm;