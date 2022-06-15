import * as React from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ImgPrint(props){
    const imgStyle={
        width:'200px',
        height:'200px',
        borderRadius:'50%'
    }
    if(props.f1==2){
        return<div>
            <Button variant="text" onClick={()=>{
                
            }}>Text</Button>
            <div className='food-images'>
                <img style={imgStyle} src='../../image/꼬치.jpg'/>
                <img style={imgStyle} src='../../image/고기.jpg'/>
        </div>
        </div>
        
    }
    return<div>
        <Button variant="text">Text</Button>
        <div className='food-images'>
            <img style={imgStyle} src='../../image/계란.jpg'/>
            <img style={imgStyle} src='../../image/볶음밥.jpg'/>
    </div>
    </div>
    // return <div>
    //     <img style={imgStyle} src={`../../image/c0${props.food1}.jpg`}/>
    // </div>
}

const Food = () => {
    const {food1} = useParams();
    const {food2} = useParams();
    return(
        <div className='food-wrap'>
            <h3>오늘의 {food1==2?'점심':'저녁'} 메뉴</h3>
            <ImgPrint f1={food1} f2={food2}/>
        </div>
    )
}

export default Food;