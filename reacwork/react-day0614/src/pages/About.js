import * as React from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';

const About = () => {
    const {name} = useParams();
    console.log({name});
    console.log({name}.name);
    return(
        <div>
            <h3>안녕하세요. 제 이름은 {name==null?'비트캠프':name}입니다.</h3>
        </div>
    )
}

export default About;