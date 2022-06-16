import * as React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import ShopRowItem from './ShopRowItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

export default function Shop() {
    const navi = useNavigate();
    //백엔드에서 받아올 리스트 데이터 변수
    const [shopList, setShopList] = React.useState([]);
    //데이터 가져오는 함수
    const list = () => {
        let url = "http://localhost:9001/shop/list";

        axios.get(url)
        .then(res=>{
            //스프링으로부터 받아온 List를 shopList에 넣기
            setShopList(res.data);
            console.log("len = " + res.data.length);
        })
    }

    //처음 렌더링시 딱 한번 데이터 가져오기
    React.useEffect(() => {
        // console.log("list");
        list();
    },[]);
    
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" style={{}}
                onClick={()=>{
                    navi("/shop/form")
                }}>상품등록</Button>
            </Stack>
            {/* <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList> */}
            <table className='table table-bordered' style={{width:'500px'}}>
                <thead>
                    <tr style={{backgroundColor:'#fdf'}}>
                        <th width='50'>번호</th>
                        <th width='350'>상품명</th>
                        <th width='50'>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopList.map((row,index)=>(
                            <ShopRowItem key={index} idx={index} row={row}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


function itemInject(itemData){
    let rows,cols=1;

    for(var i=0; i<8; i++){
        if(i==0 || i==4){
            itemData.push({
                img:'',
                num:i,
                rows:2,
                cols:2
            })
        }else if(i==3 || i==5){
            itemData.push({
                img:'',
                num:i,
                cols:2
            })
        }else{
            itemData.push({
                img:'',
                num:i
            })
        }
    }
}

const itemData = [];
