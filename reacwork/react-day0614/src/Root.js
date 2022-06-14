import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterMain from './RouterMain';
import './App.css';

const Root = () => {
    
    return(
        <BrowserRouter>
            <RouterMain/>
        </BrowserRouter>
    )
}

export default Root;