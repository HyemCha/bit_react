import * as React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom'

const Shop = () => {
    const navi = useNavigate();
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" style={{}}
                onClick={()=>{
                    navi("/shop/form")
                }}>상품등록</Button>
            </Stack>
            <h1>목록 출력</h1>
        </div>
    )
}

export default Shop;