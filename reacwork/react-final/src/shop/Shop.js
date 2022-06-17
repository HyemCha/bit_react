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
            console.dir("res.data : " + res.data)
            console.log("res.data.sangpum : " + res.data)
            // itemInject(shopList);
        })
    }

    //처음 렌더링시 딱 한번 데이터 가져오기
    React.useEffect(() => {
        // console.log("list");
        list();
    },[]);
    
    return (
        <div className='shopList'>
            <Button variant="outlined" style={{}}
            onClick={()=>{
                navi("/shop/form")
            }}>상품등록</Button>
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
                        alt=''
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
