import * as React from 'react';
import './App.css';
import * as router from 'react-router-dom';
import {About,Info,Main,Menu,Title} from './components';
import Board from './board/Board';
import Login from './login/Login';
import {Shop,ShopDetail,ShopForm,ShopUpdateForm} from './shop';
import Member from './member/Member';
import Memo from './memo/Memo';

const RouteMain = () => {
    return (
        <div>
            <Info className='info'/>
            <div className='main-nav-wrap'>

                <Title className='title'/>
                <Menu className='menu'/>

                <div className='main'>
                    <router.Routes>
                        <router.Route path='/shop/list' element={<Shop/>}/>
                        <router.Route path='/shop/form' element={<ShopForm/>}/>
                        <router.Route path='/shop/detail/:num' element={<ShopDetail/>}/>
                        <router.Route path='/shop/updateform/:num' element={<ShopUpdateForm/>}/>

                        {/* Memo */}
                        <router.Route path='/memo/list' element={<Memo/>}/>

                        <router.Route path='/' element={<Main/>}/>
                        <router.Route path='/board/list' element={<Board/>}/>
                        <router.Route path='/member/form' element={<Member/>}/>
                        <router.Route path='/login' element={<Login/>}/>
                        <router.Route path='/about' element={<About/>}/>

                        <router.Route path='*' element={
                            <div>
                                <h1>잘못된 URL 주소입니다.</h1>
                            </div>
                        }/>
                    </router.Routes>
                </div>
            </div>

            


        </div>
    )
}

export default RouteMain;