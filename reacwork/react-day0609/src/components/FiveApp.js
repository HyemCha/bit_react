import React, { useState } from "react";
import '../App.css';

const FiveApp = () => {
    const [photo,setPhoto] = useState('../image2/01.png');
    const radioE = (e) => {
        setPhoto(e.target.value);
    }
    return(
        <div>
            <h2 className="alert alert-danger">FiveApp입니다람쥐</h2>

            <div style={{fontSize:'20px'}}>
                <b>인형선택 : </b>
                <label><input type="radio" name="photo" value='../image2/01.png' defaultChecked onClick={radioE}/>인형1</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/02.png' onClick={radioE}/>인형2</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/03.png' onClick={radioE}/>인형3</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/04.png' onClick={radioE}/>인형4</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/05.png' onClick={radioE}/>인형5</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/06.png' onClick={radioE}/>인형6</label>
                &emsp;
                <label><input type="radio" name="photo" value='../image2/07.png' onClick={radioE}></input>인형7</label>
            </div>
            <img src={photo} className="photo2"/>
        </div>
    )
}
export default FiveApp;