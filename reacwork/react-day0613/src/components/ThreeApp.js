import React,{useState} from "react";
import '../App.css';

const ThreeApp = () =>{
    const [boards,setBoards] = useState([
        {
            no:1,
            writer:'황런쥔',
            subject:'갸악',
            photo:'s1'
        },
        {
            no:2,
            writer:'이마크',
            subject:'야호',
            photo:'s4'
        },
        {
            no:3,
            writer:'나재민',
            subject:'귀여워',
            photo:'s3'
        },
        {
            no:4,
            writer:'박지성',
            subject:'에엥',
            photo:'s6'
        },
        {
            no:5,
            writer:'이제노',
            subject:'웨에엥',
            photo:'s8'
        }
    ]);
    return(
        <div>
            <h3 className="alert alert-info">ThreeApp 컴포넌트</h3>
            <table className="table table-bordered" style={{width:'400px'}}>
                <caption><b>배열 객체 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'#ccc'}}>
                        <th width='60'>번호</th>
                        <th width='300'>제목</th>
                        <th width='100'>사진</th>
                        <th width='100'>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((row,idx)=>(
                            <tr key={idx}>
                                <td>{row.no}</td>
                                <td>{row.subject}</td>
                                <td><img src={`../image/${row.photo}.JPG`} width='60'/></td>
                                <td>{row.writer}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ThreeApp;