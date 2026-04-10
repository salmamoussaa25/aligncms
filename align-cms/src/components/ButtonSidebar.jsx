import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonSidebar.css';

const ButtonSidebar = ({ to, title }) => {
    return ( 
        <Link to={to} className="sidebarbutton_cont">
            <button className='menu_text'>{title}</button>
        </Link>
     );
}
 
export default ButtonSidebar;