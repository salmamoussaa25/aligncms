import React from 'react';
import { NavLink } from 'react-router-dom';
import './ButtonSidebar.css';

const ButtonSidebar = ({ to, title, Icon, isCollapsed }) => {

    const determineClasses = ({ isActive }) => {
        let classList = "sidebar_btn_cont";
        if (isActive) {
            classList = classList + " sidebar_btn_active";
        }

        if (isCollapsed) {
            classList = classList + " sidebar_btn_collapsed";
        }

        return classList;
    };

    return (
        <NavLink to={to} end={to === '/'} className={determineClasses}>
            {Icon && (
                <div className="sidebar_btn_icon_wrapper">
                    <Icon className="sidebar_btn_icon" strokeWidth={1.5} />
                </div>
            )}
            
            {!isCollapsed && (
                <span className="sidebar_btn_text">
                    {title}
                </span>
            )}

        </NavLink>
    );
};

export default ButtonSidebar;