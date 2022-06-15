import * as React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    
  ];

const Home = () => {
    const navi = useNavigate();

    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                    m: 1,
                    },
                }}
                >
               
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    <Button key="one" onClick={()=> {
                    navi('/about');
                    }}>About</Button>,
                    <Button key="two" onClick={()=> {
                    navi('/about/순자');
                    }}>About2</Button>,
                    <Button key="three" onClick={()=> {
                    navi('/food/11/12');
                    }}>점심메뉴</Button>,
                    <Button key="four" onClick={()=> {
                    navi('/food/8/9');
                    }}>저녁메뉴</Button>,
                </ButtonGroup>
            </Box>
        </div>
    )
}

export default Home;