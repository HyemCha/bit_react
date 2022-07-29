import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function BoardList1(){
    const [itemDatas, setItemDatas] = React.useState([...itemData]);
    const navi = useNavigate();
    const {currentPage} = useParams();


    const photoUrl = process.env.REACT_APP_SPRING_URL + "save/"

    const itemImport = () => {
        const listUrl = process.env.REACT_APP_SPRING_URL + "board/alllist"
        axios.get(listUrl)
        .then(res=>{
            console.log("list 가져오기 성콩성콩")
            console.log("list",res)
            console.log("...res.data",...res.data)
            setItemDatas([...res.data])
        })
    }

    React.useEffect(()=>{
        itemImport();
    },[])

    return <div className='board-list'>
        <ImageList className='board-list2-imageList' sx={{ width: 500, height: 450 }}>
            {itemDatas.map((item) => (
                <ImageListItem key={item.photo}>
                <img
                    src={`${photoUrl}${item.photo}?w=248&fit=crop&auto=format`}
                    srcSet={`${photoUrl}${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.subject}
                    loading="lazy"
                    style={{cursor:'pointer'}}
                    onClick={()=>{
                      navi(`/board/detail/${item.num}/${currentPage}`)
                    }}
                />
                <ImageListItemBar sx={{}}
                    title={item.subject}
                    subtitle={<span>by: {item.name}</span>}
                    position="below"
                />
                {/* <span>{item.subject}</span> */}
                </ImageListItem>
            ))}
        </ImageList>
    </div>
}

const itemData = [];