import React,{useState,useRef} from "react";
import '../App.css';

const FiveApp = () => {
    const nameRef = useRef('');
    const korRef = useRef('');
    const engRef = useRef('');
    const mathRef = useRef('');
    const [result,setResult] = useState('');

    const buttonResult = () => {
        //데이터 읽어ㅓ오기
        let name = nameRef.current.value;
        let kor = Number(korRef.current.value);
        let eng = Number(engRef.current.value);
        let mat = Number(mathRef.current.value);
        let tot = kor + eng + mat;
        let avg = (tot/3).toFixed(2);

        let r = `[결과확인]
        이름 : ${name}
        국어점수 : ${kor}
        영어점수 : ${eng}
        수학점수 : ${mat}
        총    수 : ${tot}
        평    균 : ${avg}`;
        setResult(r);
        //포커스
        nameRef.current.value='';
        korRef.current.value='';
        engRef.current.value='';
        mathRef.current.value='';
        nameRef.current.focus();
        
    }
    return(
        <div>
            <h3 className="alert alert-info">FiveApp 컴포넌트 - useRef 예제</h3>
            <h4>이름입력 : <input type='text' ref={nameRef}/></h4>
            <h4>국어점수 : <input type='text' ref={korRef}/></h4>
            <h4>영어점수 : <input type='text' ref={engRef}/></h4>
            <h4>수학점수 : <input type='text' ref={mathRef}/></h4>
            <button type='button' className="btn btn-danger"
            onClick={buttonResult}>결과 확인</button>
            <h2 className="alert alert-info" style={{whiteSpace:'pre-wrap'}}>{result}</h2>
        </div>
    )
}
export default FiveApp;