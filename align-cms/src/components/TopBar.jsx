import React from 'react';
import { Search, Bell } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <header className="topbar_container">
      <div className="topbar_searchwrapper">
        <Search size={18} className="topbar_searchicon" />
        <input 
          type="text" 
          className="topbar_searchinput" 
          placeholder="Search content, pages, media..." 
        />
      </div>

      <div className="topbar_actions">
        <button className="topbar_bellbtn" aria-label="Notifications">
          <Bell size={20} />
          <span className="topbar_notificationdot"></span>
        </button>
        
        <div className="topbar_profile">
          <div className="topbar_avatar">SM</div>
          <div className="topbar_userinfo">
            <p className="topbar_username">Salma Moussa</p>
            <p className="topbar_useremail">admin@align.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}