import * as React from 'react';
import '../App.css';
import * as rrd from 'react-router-dom'
import BoardList1 from './BoardList1'
import BoardList2 from './BoardList2'
import BoardList3 from './BoardList3'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';


const Board = () => {
    const [show,setShow] = React.useState(1); 
    const navi = rrd.useNavigate();
    const {num} = rrd.useParams();

    console.log(show)

    return (
        <div>
            
            <h1>Board</h1>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Button variant="outlined" sx={{width:'80px',height:'35px',fontSize:'14px'}}
                    onClick={()=>{
                        navi("/board/form")
                    }}>글작성</Button>

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
                    <ButtonGroup sx={{height:'35px'}} variant="outlined" aria-label="text button group">
                        <Button 
                        onClick={()=>{
                            setShow(1);
                        }}><FormatListBulletedOutlinedIcon/></Button>
                        <Button
                        onClick={()=>{
                            setShow(2);
                        }}><GridViewIcon/></Button>
                        <Button
                        onClick={()=>{
                            setShow(3);
                        }}><ViewAgendaIcon/></Button>
                    </ButtonGroup>
                </Box>
            </div>
            
            <div>
                {show==1?<BoardList1/>:show==2?<BoardList2/>:<BoardList3/>}
            </div>
        </div>
    )
}

export default Board;