import React, { useState } from "react";
import '../App.css';


const SixApp = () => {
    const [show,setShow] = useState(true);
    const [vis,setVis] = useState('visible');
    const [line,setLine] = useState('solid');
    const [color,setColor] = useState('green');

    const imgBtn = e => {
        setShow(!show);
    }
    return (
        <div>
            <h2 className="alert alert-success">SixApp 입니다람쥐🐿️</h2>
            <div>
                <button type="button" className="btn btn-info" onClick={imgBtn}>
                    boolean 으로 이미지 보였다 안보였다 하기
                </button>
                {show && <img src='../image2/07.png'/>}
                <img src='../image2/07.png'
                style={{visibility:'hidden'}}/>
            </div>

            <div>       
                <button type="button" className="btn btn-warning"
                onClick={e=>{
                    if(vis=='visible'){
                        setVis('hidden');
                    }else{
                        setVis('visible');
                    }
                }}>
                    style 으로 이미지 보였다 안보였다 하기
                </button>
                <img src='../image2/07.png'
                style={{visibility:vis,borderStyle:line,borderColor:color}} className="greenline"/>
                <br/>
                <select onChange={e=>{
                    setLine(e.target.value);
                }}>
                    <option value="solid">solid</option>
                    <option value="dotted">dotted</option>
                    <option value="inset">inset</option>
                    <option value="groove">groove</option>
                    <option value="dashed">dashed</option>
                </select>
                <select onChange={e=>{
                    setColor(e.target.value);
                }}>
                    <option value="green">green</option>
                    <option value="pink">pink</option>
                    <option value="blue">blue</option>
                    <option value="skyblue">skyblue</option>
                    <option value="yellow">yellow</option>
                </select>
            </div>     
        </div>
    )
}
export default SixApp;