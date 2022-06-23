import React, { useReducer, useState } from 'react';

//userReducer : state 관리가 용이하며 유지,보수가 편하다.
//호출 : dispatch(type,action) -->reducer(state,action)
//기능
//reducer : state를 업데이트하는 역학(은행)
//dispatch-state 업데이트를 요구
//action - 요구의 내용

const ACTION_TYPES = {
    addmoney : 'addmoney',
    submoney : 'submoney'
}

//입출금을 관리할 은행역할을 할 reducer를 설립해보자
const reducer = (state, action) => {
    console.log("reducer가 일을 합니다.", state, action);

    switch(action.type){
        case ACTION_TYPES.addmoney :
            return state + action.payload;
        case ACTION_TYPES.submoney :
            return state - action.payload;
        default :
            return state;
    }
}

const ReducerComp1 = () => {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0); //0은 money의 초기값

    return (
        <div>
            <h2>useReducer은행에 오신 것을 환영합니다!!</h2>
            <p>잔고 : {money}원</p>
            <input type='number' defaultValue={number}
            onChange={(e)=>{
                setNumber(Number(e.target.value));
            }} step="5000"/>

            <br/>
            <button type='button' className='btn btn-outline-info'
            onClick={()=>{
                dispatch({'type':ACTION_TYPES.addmoney,payload:number})
            }}>입금</button>
            <button type='button' className='btn btn-outline-info'
            style={{marginLeft:'10px'}}
            onClick={()=>{
                dispatch({'type':ACTION_TYPES.submoney,payload:number})
            }}>출금</button>
        </div>
    );
};

export default ReducerComp1;