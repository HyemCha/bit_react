import * as React from 'react';
import '../App.css'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = ({isDark,setIsDark}) => {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;