import React,{useState} from "react";
import '../App.css';
//이미지 5개 선언
import img1 from '../image/s1.JPG';
import img2 from '../image/s2.JPG';
import img3 from '../image/s3.JPG';
import img4 from '../image/s4.JPG';
import img5 from '../image/s5.JPG';


const FourApp = () => {
    const [one,setOne] = useState('02');
    const [two,setTwo] = useState('');
    const [three,setThree] = useState('');
    const [photo,setPhoto] = useState(1);
    const inputStyle = {
        width:'60px',
        borderRight:'0',
        borderLeft:'0',
        borderTop:'0'
    }
    const changePhoto =(e) => {
        setPhoto(Number(e.target.value));
    }
    return (
        <div>
            <div className="content-wrap" style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex', marginTop:'10px'}}>
                    <select onChange={e=>{
                        setOne(e.target.value);
                    }}>
                        <option value="02">02</option>
                        <option value="031">031</option>
                        <option value="010">010</option>
                    </select>
                    -
                    <input style={inputStyle} type="text" maxLength="4"
                    onChange={e=>{
                        setTwo(e.target.value);
                    }}/>
                    -
                    <input style={inputStyle} type="text" maxLength="4"
                    onChange={e=>{
                        setThree(e.target.value);
                    }}/>

                    <b style={{marginLeft:'50px'}}>이미지 선택:</b>
                    <select className="form-control" onChange={changePhoto}>
                        <option value="1">철수</option>
                        <option value="2">민수</option>
                        <option value="3">영희</option>
                        <option value="4">길동</option>
                        <option value="5">순자</option>
                    </select>
                </div>
                <div style={{width:'100%',display:'flex', justifyContent:'center'}}>
                    <h1>{one}-{two}-{three}</h1>
                    <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} className="photo"/>
                </div>
            </div>
        </div>
    )
}
export default FourApp;