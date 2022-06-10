import React, {useState} from "react";
import img1 from '../image2/s1.JPG';
import img2 from '../image2/s2.JPG';
import img3 from '../image2/s3.JPG';
import img4 from '../image2/s7.JPG';
import img5 from '../image2/s8.JPG';

const TwoApp = () => {
    const imgArr = [img1,img2,img3,img4,img5];
    const photoArr = ['1','2','6','10','12'];
    return(
        <div>
            <h4>TwoApp  컴포넌트 연습</h4>
            {
                imgArr.map((img)=>(<img alt='' src={img}/>))
            }
            <div className="img-photo-wrap">
                {
                    photoArr.map((photo)=>(<img className="photo" alt='' src={`../image/${photo}.jpg`}/>))
                }
            </div>
        </div>
    )
}
export default TwoApp;