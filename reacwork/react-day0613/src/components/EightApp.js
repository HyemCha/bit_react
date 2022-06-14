import * as React from 'react';
import '../App.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import EightSubApp from './EightSubApp';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import EightSubApp2 from './EightSubApp2';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
const EightApp = () => {
    let c = 0;
    
    const [color,setColor] = React.useState('#ffccff');
    const [message,setMessage] = React.useState('입력plz');
    const [photo,setPhoto] = React.useState('s1');
    const [likeColor,setLikeColor] = React.useState(['pink','yellow','skyblue']);
    
    
    const changeEl = (data) => {
        setColor(data.color);
        setMessage(data.message);
        setPhoto(data.photo);
    }
    //더블 클릭 시 색상 제거
    const deleteLikeColor = idx=>{
        setLikeColor(likeColor.filter((a,i)=>i!==idx));
    }
    //색상 추가 이벤트
    const addCo = cc => {
    //   console.log("c:"+cc)
        setLikeColor([
            ...likeColor,
            cc
        ])
    }
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert sx={{fontSize:'25px'}} severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>Hello! This is EightApp</strong><br/>
                    *부모, 자식 컴포넌트 통신 문제*
                </Alert>            
            </Stack>
            <br/>
            <EightSubApp color={color} message={message} photo={photo} changeEl={changeEl}/>
            <br/>

            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} onClick={(e)=>{
                    console.log("control : "+e.target.value);
                    if(c===0){
                        c=1;
                        
                    }else{
                        c=0;
                    }
                }
                }/>}
                label="눌러서 안 보이게 하기~"
            />
            <h1 style={{color:color}}>{message}</h1>
            <img alt="" src={`../image/${photo}.JPG`}/>

            <div className='circle-wrap' style={{width:'1000px'}}>
            {
                likeColor.map((co,idx)=>(<div onDoubleClick={()=>{
                    deleteLikeColor(idx);
                }} key={idx} style={{backgroundColor:co}} className='circle'>{idx}</div>))
            }
            </div>
            <br/>
            <EightSubApp2 addCo={addCo}/>
        </div>
    )
}

export default EightApp;