import * as React from 'react';
import './App.css';
import RouteMain from './RouteMain';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
    return (
        <BrowserRouter>
            <RouteMain/>
        </BrowserRouter>
    )
}

export default Root;