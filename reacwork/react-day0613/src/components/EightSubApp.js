import { ChangeCircle } from '@mui/icons-material';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import * as React from 'react';
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const EightSubApp = (props) => {
    
    const [color,setColor] = React.useState(props.color);
    const [message,setMessage] = React.useState(props.message);
    const [photo,setPhoto] = React.useState(props.photo);
    // const cE = () => {
    props.changeEl({color,message,photo});
    //}
    return (
        <div>

            &lt;<span style={{fontSize:'25px'}}>pick!</span>&gt;
            <br/>
            message:
            <input type="text" placeholder={message} onChange={e=>{
                setMessage(e.target.value);
            }}/>
            &emsp;
            color:
            <input type="color" defaultValue={color} onChange={(e)=>{
                setColor(e.target.value)
            }}/>
            &emsp;
            photo:
            <select name="photo" defaultValue={photo} onChange={e=>{
                setPhoto(e.target.value);
            }}>
                {
                    [...new Array(10)].map((data,i)=>(<option key={i}>s{i+1}</option>))
                }
            </select>
            
        </div>
    )
}

export default EightSubApp;