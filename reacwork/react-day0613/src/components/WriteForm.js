import * as React from 'react';
import '../App.css';

const WriteForm = ({onSave}) => {
    const [name,setName] = React.useState('');
    const [photo,setPhoto] = React.useState('s1');
    const [blood,setBlood] = React.useState('A');
    //버튼 이벤트
    const addDataEvent = ()=>{
        //부모 컴포넌트의 onSave 호출
        onSave({name,photo,blood})//key값과 value값이 같으면 key값 생략
    }
    return(
        <div>
            <b>이름 : </b>
            <input type='text' style={{width:'100px'}}
            onChange={e=>{
                setName(e.target.value)
            }}/>
            <b style={{marginLeft:'10px'}}>혈액형 : </b>
            <select onChange={e=>{
                setBlood(e.target.value);
            }}>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
            </select>
            <b style={{marginLeft:'10px'}}>사진 : </b>
            <select onChange={e=>{
                setPhoto(e.target.value);
            }}>
                {
                    [...new Array(10)].map((a,idx)=>(<option>{`s${idx+1}`}</option>))
                }
            </select>
            <button type='button' className='btn btn-info btn-sm'
            style={{marginLeft:'10px'}}
            onClick={addDataEvent}>추가</button>
        </div>
    )
}

export default WriteForm;