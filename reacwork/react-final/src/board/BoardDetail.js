import * as React from 'react';
import '../App.css';
import axios from 'axios';
import * as rrd from 'react-router-dom';import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
const { Paragraph } = Typography;


export default function BoardDetail(){
    const {num,currentPage} = rrd.useParams();
    const navi = rrd.useNavigate();

    const [dto,setDto] = React.useState();
    const [photo,setPhoto] = React.useState();
    
    const detailUrl = process.env.REACT_APP_SPRING_URL + "board/detail?num=" + num + "&currentPage=" + currentPage;
    const photoUrl = process.env.REACT_APP_SPRING_URL + "save/";

    const getData = () => {
        axios.get(detailUrl)
        .then(res=>{
            console.log("detail res.data",res.data)
            setDto(res.data);
        })
    }

    React.useEffect(()=>{
        getData();
    },[])


    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  1st menu item
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  2nd menu item
                </a>
              ),
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  3rd menu item
                </a>
              ),
            },
          ]}
        />
      );
      
      const DropdownMenu = () => (
        <Dropdown key="more" overlay={menu} placement="bottomRight">
          <Button
            type="text"
            icon={
              <MoreOutlined
                style={{
                  fontSize: 20,
                }}
              />
            }
          />
        </Dropdown>
      );
      
      const routes = [
        {
          path: 'index',
          breadcrumbName: 'First-level Menu',
        },
        {
          path: 'first',
          breadcrumbName: 'Second-level Menu',
        },
        {
          path: 'second',
          breadcrumbName: 'Third-level Menu',
        },
      ];
      
      const IconLink = ({ src, text }) => (
        <a className="example-link">
          <img className="example-link-icon" src={src} alt={text} />
          {text}
        </a>
      );
      
      const content = (
        <>
          <Paragraph>
            <img alt='' src={dto&&(photoUrl+dto.photo)}/>
          </Paragraph>
          <Paragraph>
            {dto&&dto.content}
          </Paragraph>
          <div>
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text="Quick Start"
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
              text=" Product Info"
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text="Product Doc"
            />
          </div>
        </>
      );
      
      const Content = ({ children, extraContent }) => (
        <Row>
          <div
            style={{
              flex: 1,
            }}
          >
            {children}
          </div>
          <div className="image">{extraContent}</div>
        </Row>
      );
      // detail


    return<div>
        <h2>{num}</h2>
        <PageHeader
            title={dto&&dto.subject}
            className="site-page-header"
            subTitle={dto&&dto.name}
            tags={<Tag color="blue">Running</Tag>}
            extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
                Primary
            </Button>,
            <DropdownMenu key="more" />,
            ]}
            avatar={{
            src: `${dto&&(photoUrl+dto.photo)}`,
            }}
            breadcrumb={{
            routes,
            }}
        >
            <Content
            extraContent={
                <img
                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                alt="content"
                width="100%"
                />
            }
            >
            {content}
            </Content>
        </PageHeader>
        {/* <table className='table table-bordered'>
            <tbody>
                <tr>
                    <td>{dto.subject}</td>
                    <td>{dto.name}</td>
                </tr>
            </tbody>
        </table> */}
        <br/><br/>
        <div>
            <button type='button' className='btn btn-info'
            style={{width:'100px',marginRight:'10px'}}
            onClick={()=>{
                navi("/board/form")
            }}>
            글쓰기
            </button>
            <button type='button' className='btn btn-info'
            style={{width:'100px',marginRight:'10px'}}
            onClick={()=>{
                navi(`/board/list/${currentPage}`);
            }}>
            목록
            </button>
        </div>
    </div>
}