import * as React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';

const ShopRowItem = ({idx,row}) => {
    const navi = useNavigate();

    let photoUrl = "http://localhost:9001/save/";
    return (
        <div className='shop-row-wrap'>
            <div className='shop-detail-wrap'
            onClick={()=>{
                    // navi(`/shop/detail/${row.idx}`);
                    console.log("num:"+row.num);
                    navi("/shop/detail/" + row.num);
                }}>
                <img alt='' src={photoUrl + row.photo} className='shop-row-img'/>
            </div>
            <b>{row.sangpum}</b>
        </div>
    )
}

export default ShopRowItem;