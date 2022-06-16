import * as React from 'react';
import '../App.css';
import infoimg from '../image/popup5.jpg'


const Info = () => {
    return (
        <div>
            <input type="checkbox" id="menuicon"/>
            <label htmlFor="menuicon">
                <span></span>
                <span></span>
                <span></span>
                <p>info</p>
            </label>
            <div className="sidebar">
                <div className='sidebar-content'>
                    <img src={infoimg} alt='' style={{width:'280px'}}/>
                    <br/><br/>
                    <div>비트캠프</div>
                    <div>02-222-333</div>
                </div>
            </div>
        </div>
    )
}

export default Info;