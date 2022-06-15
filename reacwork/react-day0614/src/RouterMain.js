import * as React from 'react';
import * as router from 'react-router-dom';
import {Home,About,Food} from './pages'; //자동으로 pages의 index.js가 import
import Menu from './components/Menu';
import './App.css';
import { Alert } from '@mui/material';
import { Route } from '@mui/icons-material';
import foodimg from './img/c03.jpg';

//모든 컴포넌트마다 같게 주면 여기다
const RouterMain = () => {
    return(
        <div className='main-wrap'>
            {/* 모든 페이지에 공통으로 포함되는 컴포넌트나 이미지 */}
            <Alert severity='error'>React Router 공부하기</Alert>
            <Menu/>
            <div className='main-bottom'>
                <img src={foodimg} className='main-photo' alt="../image/꼬치.jpg"/>
            
                <div className='main_comp'>
                    <router.Routes>
                        <router.Route path='/' element={<Home/>}/>
                        <router.Route path='/about' element={<About/>}/>
                        <router.Route path='/about/:name' element={<About/>}/>
                        <router.Route path='/food/:food1/:food2' element={<Food/>}/>

                        <router.Route path='/login/*' element={
                            <div>
                                <h1>로그인 기능은 아직 구현 전 입니다. 연근이나 드세요.</h1>
                                <img src='../image/c01.jpg'/>
                            </div>
                            // 컴포넌트를 만드는 대신 여기에 직접 쓰는 것이므로 하나로 묶어야 함. 컴포넌트를 쓰는 것이 좋지만 컴포넌트가
                            //완성되기 전까지는 이렇게 씀
                        }/>

                        {/* //그 이외의 매핑주소일 경우 */}
                        <router.Route path='*' element={
                            <h1>잘못된 주소입니다.</h1>
                        }/>
                    </router.Routes>
                </div>
            </div>
            
            
        </div>
    )
}

export default RouterMain;