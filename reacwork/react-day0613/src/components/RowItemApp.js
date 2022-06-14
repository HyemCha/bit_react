import React from "react";
import '../App.css';

// const RowItemApp = ({row,idx,onDelete}) => {
//     const deleteData = ()=>{
//         onDelete(idx);
//     }

//     return(//변수가 부모 컴포넌트 것이므로 삭제 이벤트도 부모컴포넌트에서 불러와야 함
//         <tr>
//             <td>{row.name}</td>
//             <td><img src={`../image/${row.photo}.JPG`} style={{width:'100px',border:'1px solid gray'}}/></td>
//             <td>{row.blood}</td>
//             <td>{row.today.toLocaleDateString('ko-KR')}</td>
//             <td>
//                 <button type="button" className="btn btn-sm btn-danger"
//                 onClick={deleteData}>삭제</button>
//             </td>
//         </tr>
//     )
// }
const RowItemApp = (props) => {
    let {row,idx,onDelete}=props;

    const deleteData = ()=>{
        onDelete(idx); //부모가 props로 보낸 이벤트 호출
    }

    return(//변수가 부모 컴포넌트 것이므로 삭제 이벤트도 부모컴포넌트에서 불러와야 함
        <tr>
            <td>{row.name}</td>
            <td><img src={`../image/${row.photo}.JPG`} style={{width:'100px',border:'1px solid gray'}}/></td>
            <td>{row.blood}</td>
            <td>{row.today.toLocaleDateString('ko-KR')}</td>
            <td>
                <button type="button" className="btn btn-sm btn-danger"
                onClick={deleteData}>삭제</button>
            </td>
        </tr>
    )
}
export default RowItemApp;