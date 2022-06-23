import React from 'react';

const Student = ({name,dispatch,id,isHere}) => {
    return (
        <div>
            <div className='form-inline'>
                <span style={{
                    textDecoration : isHere?'line-through':'none',
                    color : isHere?'gray':'black',
                    display:'inline-block'
                }}
                onClick={()=>{
                    dispatch({type:'mark-student',payload:{id}})
                }}>
                    {name}
                </span>

                <button type='button' className='btn btn-outline-danger btn-sm'
                style={{marginLeft:'10px'}}
                onClick={()=>{
                    dispatch({type:'delete-student',payload:{id}})
                }}>삭제</button>
            </div>
        </div>
    );
};

export default Student;