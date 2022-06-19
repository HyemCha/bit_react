import * as React from 'react';
import '../App.css';
import infoimg from '../image/popup5.jpg'


const Info = () => {
    return (
        <div className='info'>
            <input type="checkbox" id="menuicon"/>
            <label htmlFor="menuicon">
                {/* <span></span>
                <span></span>
                <span></span> */}
                <p></p>
                <p>info</p>
            </label>
            <div className="sidebar">
                <div className='sidebar-content'>
                    <p>본 사이트의 정보를 제공합니다.</p>
                    <br/>
                    <img src={infoimg} alt='' style={{width:'260px'}}/>
                    <br/>
                    <p>비트캠프</p>
                    <p>02-222-333</p>
                </div>
            </div>
        </div>
    )
}

export default Info;