import * as React from 'react';
import '../App.css';
import {useParams,useNavigate} from 'react-router-dom'
import memberprofile from '../image/cute.png';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    }));


const ShopDetail = () => {
    //.env 팡ㄹ에서 전역변수값 가져오기
    const SPRING_URL = process.env.REACT_APP_SPRING_URL;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const [open, setOpen] = React.useState(false);

    const navi = useNavigate();
    const {num} = useParams();
    const [data,setData] = React.useState('');

    const [heartColor,setHeartColor] = React.useState(null);
    const heartSx = {
        fill:heartColor
    }

    //하트 색
    const heartColorChange = () => {
        if(heartColor===null){
            setHeartColor('red');
        }else{
            setHeartColor(null);
        }
    }
    
// 토글
    const [openToggle, setOpenToggle] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpenToggle((prevOpen) => !prevOpen);
    };

    const handleCloseToggle = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenToggle(false);
    };

    function handleListKeyDown(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        setOpenToggle(false);
    } else if (event.key === 'Escape') {
        setOpenToggle(false);
    }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(openToggle);
    React.useEffect(() => {
    if (prevOpen.current === true && openToggle === false) {
        anchorRef.current.focus();
    }

    prevOpen.current = openToggle;
    }, [openToggle]);
// 토글

    // 삭제
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //url 등록
    let detailUrl = SPRING_URL + "shop/detail?num="+num;
    let photoUrl = SPRING_URL + "save/";
    let deleteUrl = SPRING_URL + "shop/delete?num="+num;

    //스프링으로부터 num에 해당하는 data 받기
    const onDataReceive = () => {
        axios.get(detailUrl)
        .then(res => {
            console.log(res.data);
            console.log("res.data.sangpum"+res.data.sangpum);
            setData(res.data);
        })
    }

    //처음 렌더링 시 위의 함수 호출
    React.useEffect(() => {
        onDataReceive();
    },[])

    //삭제시 호출할 함수
    const onDelete = () => {
        console.log("delete");
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제 후 목록으로 이동
            navi("/shop/list");
        })
        handleClose(); //다이얼로그 닫기
    }

    return (
        <div>
            <h1>ShopDetail&nbsp;&nbsp;<span style={{fontSize:'14px',fontWeight:'normal'}}><strong>'{data.sangpum}'</strong> 상세 페이지 입니다🍀</span></h1>
            <div className='shopDetail'>
            <Card sx={{ maxWidth: 500 , }}>
                <CardHeader
                    avatar={
                    // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    //     R
                    // </Avatar>
                    <Avatar alt="Remy Sharp" src={memberprofile} />
                    }
                    action={
                    <Stack direction="row" spacing={2}>
                        <div>
                            <Button
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={openToggle ? 'composition-menu' : undefined}
                                aria-expanded={openToggle ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            </Button>
                            <Popper
                                open={openToggle}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                            autoFocusItem={openToggle}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                            >
                                            <MenuItem onClick={(e)=>{
                                                navi(`/shop/updateform/${num}`);
                                                handleCloseToggle(e);
                                            }}>수정</MenuItem>
                                            <MenuItem onClick={(e)=>{
                                                handleClickOpen();
                                                handleCloseToggle(e);
                                            }}>삭제</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                                )}
                            </Popper>
                        </div>
                    </Stack>
                    
                    }
                    title={data.sangpum}
                    subheader={data.ipgoday}
                />
                <CardMedia
                    component="img"
                    height="300"
                    image={photoUrl + data.photo}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {data.ipgoday}의 신메뉴! {data.sangpum}를 {data.dan}원에 만나보세요~!
                        {data.su}개 한정 판매!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={heartSx}
                    onClick={()=>{
                        heartColorChange();
                    }}/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            {/* <h1>{idx}</h1> */}
            {/* <div className='detail-top'>
                <div className='sangpum-photo'>
                    <img alt='' src={photoUrl + data.photo}/>
                </div>
                <div className='sangpum-detail'>
                    <span>상품명 : {data.sangpum}</span>
                    <span>수량 : {data.su}</span>
                    <span>단가 : {data.dan}</span>
                    <span>입고일 : {data.ipgoday}</span>
                </div>
            </div> */}
            <div className='detail-bottom'>
                <Button variant="outlined" 
                onClick={()=>{
                    navi("/shop/list")
                }}>목록</Button>
                <Button variant="outlined" 
                onClick={()=>{
                    navi("/shop/form")
                }}>상품추가</Button>
                {/* <Button variant="outlined" onClick={()=>{
                    navi(`/shop/updateform/${num}`);
                }}>수정</Button> */}
                {/* <Button variant="outlined" onClick={handleClickOpen}>삭제</Button> */}
                
                {/* Dialog */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"상품 삭제 확인"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {data.sangpum}을 삭제하시겠습니까?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>취소</Button>
                        <Button onClick={onDelete} autoFocus>
                            확인
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
        </div>
        
    )
}

export default ShopDetail;