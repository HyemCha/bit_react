import * as React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import apple from '../apple.svg';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import MenuIcon from '@mui/icons-material/Menu';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function Menu(){
    const [value, setValue] = React.useState(0);
    const [vvalue, setVvalue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeV = (event, newValue) => {
        setVvalue(newValue);
    };

    const verticalMenu =()=>{

    }
    return<div className='menu-wrap'>
        <div className='main-vertical-tabs' style={{display:'none'}}>
            <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={vvalue}
                    onChange={handleChangeV}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={vvalue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={vvalue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={vvalue} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={vvalue} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={vvalue} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={vvalue} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={vvalue} index={6}>
                    Item Seven
                </TabPanel>
            </Box>
        </div>
        
         <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex' }}>
                <button className='mebu-btn' type='button' onMouseOver={()=>{
                    
                }}>
                    <MenuIcon color="primary"/>
                </button>
                <a href='/'>
                    <img src={apple} style={{width:'30px'}} className="Apple-logo" alt="logo" />
                </a>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="채용" {...a11yProps(0)} />
                <Tab label="이벤트" {...a11yProps(1)} />
                <Tab label="직군별" {...a11yProps(2)} />
                <Tab label="이력서" {...a11yProps(3)} />
                <Tab label="커뮤니티" {...a11yProps(4)} />
                <Tab label="프리랜서" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                채용 페이지
            </TabPanel>
            <TabPanel value={value} index={1}>
                이벤트 페이지
            </TabPanel>
            <TabPanel value={value} index={2}>
                직군별 연봉 페이지
            </TabPanel>
            <TabPanel value={value} index={3}>
                이력서 페이지
            </TabPanel>
            <TabPanel value={value} index={4}>
                커뮤니티 페이지
            </TabPanel>
            <TabPanel value={value} index={5}>
                프리랜서 페이지
            </TabPanel>
        </Box>
    </div>
}

export default Menu;