import * as React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';

const ShopRowItem = ({idx,row}) => {
    const navi = useNavigate();

    let photoUrl = "http://localhost:9001/save/";
    return (
        <tr>
            <td>{idx+1}</td>
            <td>
                <img alt='' src={photoUrl + row.photo} className='small'/>
                <b>{row.sangpum}</b>
            </td>
            <td>
                <button type='button' className='' 
                onClick={()=>{
                    // navi(`/shop/detail/${row.idx}`);
                    console.log("num:"+row.num);
                    navi("/shop/detail/" + row.num);
                }}>detail</button>
            </td>
        </tr>
    )
}

export default ShopRowItem;