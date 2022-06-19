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
            // itemInject(shopList);
        })
    }

    //처음 렌더링시 딱 한번 데이터 가져오기
    React.useEffect(() => {
        // console.log("list");
        list();
    },[]);
    
    return (
        <div>
            <h1>Shop&nbsp;&nbsp;<span style={{fontSize:'14px',fontWeight:'normal'}}>음~ 맛있다~ 마.트. 다녀오셨어요?🍜</span></h1>
            <Button variant="outlined"
            onClick={()=>{
                navi("/shop/form")
            }}>상품등록</Button>
            <div className='shopList'>
                {
                    shopList.map((row,index)=>(
                        <ShopRowItem key={index} idx={index} row={row}/>
                    ))
                }
            </div>
        </div>
    );
}


// function itemInject(shopList){
//     let photoUrl = "http://localhost:9001/save/";
//     const sllength = shopList.length;
//     console.log(sllength);
//     shopList.map((data,idx)=>{
//         let i=idx;
//         for(i<8){
//             if(i%8===0){
//                 i=0
//             }
//             if(i==0 || i==5){
//                 itemData.push({
//                     img:photoUrl+data.photo,
//                     num:data.num,
//                     rows:2,
//                     cols:2
//                 })
//             }else if(i==3 || i==4){
//                 itemData.push({
//                     img:photoUrl+data.photo,
//                     num:data.num,
//                     cols:2
//                 })
//             }else{
//                 itemData.push({
//                     img:photoUrl+data.photo,
//                     num:data.num
//                 })
//             }
//         }
            
//     })
    
// }

let itemData = [];
