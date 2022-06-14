import * as React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Menu = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return(
        <div>
            <ToggleButtonGroup className='toggle-btn-group'
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="1"><NavLink to='/'>Home</NavLink></ToggleButton>
                <ToggleButton value="2"><NavLink to='/about'>About</NavLink></ToggleButton>
                <ToggleButton value="3"><NavLink to='/about/Lee'>About-Lee</NavLink></ToggleButton>
                <ToggleButton value="4"><NavLink to='/food/2/3'>점심메뉴</NavLink></ToggleButton>
                <ToggleButton value="5"><NavLink to='/food/5/6'>저녁메뉴</NavLink></ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default Menu;