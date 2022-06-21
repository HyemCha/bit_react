import { List } from 'antd';
import axios from 'axios';
import * as React from 'react';
import '../App.css';
import { Collapse } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';

const { Panel } = Collapse;
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const MemberList = () => {
    const [data, setData] = React.useState([]);

    function list(){
        const allMembersUrl = process.env.REACT_APP_SPRING_URL + "member/list";

        axios.get(allMembersUrl)
        .then(res=>{
            console.log("data",res.data)
            setData(res.data)
        })
    }

    React.useEffect(()=>{
        list();
        console.log("불러옴")
    },[])

    const deleteData = (num) => {
        const deleteUrl = process.env.REACT_APP_SPRING_URL + "member/delete?num=" + num;
        axios.delete(deleteUrl)
        .then(res=>{
            console.log("삭제성공");
        })
        .catch(err=>{
            console.log("삭제실패");
        })
    }    

    return (
        <div>
            <h1>MemberList</h1>
            <Collapse accordion>
                {
                    data.map((data,idx)=>{
                        let header = data.num + data.name + data.id + data.hp + data.email;
                        let text = data.addr + data.hp
                    return(
                        <Panel key={idx} header={header}>
                            <span>{text}</span><DeleteIcon sx={{width:'18px'}}/>
                        </Panel>
                   )})
                }
            </Collapse>
            <table className='table table-bordered' style={{width:'600px'}}>
                <caption></caption>
                <thead><tr>
                    <th>번호</th><th>이름</th><th>아이디</th><th>핸드폰</th><th>이메일</th>
                </tr></thead>
                <tbody>
                    {
                        data.map((data,idx)=>{
                            let header = data.num + data.name + data.id + data.hp + data.email;
                            let text = data.addr + data.hp
                        return(
                            <>
                            <tr>
                                <td>{data.num}</td>
                                <td>{data.name}</td>
                                <td>{data.id}</td>
                                <td>{data.hp}</td>
                                <td>{data.email}</td>
                            </tr>
                            <tr key={idx}>
                                <td colSpan={4}>{data.addr}</td>
                                <td><button style={{backgroundColor:'white',border:'0'}} className='delete-btn' onClick={()=>
                                {deleteData(data.num)}}><DeleteIcon sx={{width:'18px'}}/></button></td>
                            </tr>
                            </>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MemberList;