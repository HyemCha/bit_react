import * as React from 'react';
import * as router from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';
import {Route} from '@mui/icons-material';

function RouterMain(){
    return(
        <div className='router-main-wrap'>
            <Menu/>
        </div>
    )
}
export default RouterMain;