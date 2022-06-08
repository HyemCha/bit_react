import React from "react";
import './MyStyle.css';
import img12 from '../12.jpg'
import k045 from '../image/K-045.png'

const FirstApp = () => {
    //style을 변수에 지정
    const styleImg1 = {
        width:'200px',
        border:'5px inset gray',
        marginLeft:'100px',
        marginTop:'20px'
    }
    const styleImg2 = {
        width:'200px',
        border:'1px solid gray',
        borderRadius:'10px',
        marginLeft:'10px'
    }
    return(
        // 반드시 하나의 태그로 감싸줘야 한다
        <div>
            {/* 가나다 */}
            <h2 className="line"style={{fontFamily:'Joan'}}>First App Component!!</h2>
            <div style={{fontFamily:'Hahmlet',fontSize:'25px',color:'green',marginLeft:'100px'}}>
                안녕하세요. 반가워요!
            </div>
            <img style={styleImg1} src={img12} alt=""/>
            <img src={k045} style={styleImg2}/>

            <h3>public 영역의 이미지는 직접 호출 가능</h3>
            <img src="../s5.JPG"/>
        </div>
    )
}
export default FirstApp;