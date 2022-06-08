import React from "react";
import './MyStyle.css';
import img1 from '../image/K-045.png';

const ThirdApp = () => {
    const imgStyle = {
        width:'100px',
        border:'1px solid gray',
        borderRadius:'12px'
    }
    return(
        <div>
            <h2>ThirdApp입니다용</h2>
            <div>
                <img src={img1} style={imgStyle}/>
                <img src="../s5.JPG" style={imgStyle}/>
            </div>
        </div>
    )
}

export default ThirdApp;