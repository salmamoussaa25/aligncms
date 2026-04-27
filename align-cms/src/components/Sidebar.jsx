// Sidebar.jsx
import React, { useState } from 'react';
import { LayoutGrid, Globe, Smartphone, Folder, Users, BarChart2, Settings, ChevronLeft } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  const [is_collapsed, set_is_collapsed] = useState(false);

  const nav_items = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, active: true },
    { id: 'website', label: 'Website CMS', icon: Globe },
    { id: 'mobile', label: 'Mobile App CMS', icon: Smartphone },
    { id: 'content', label: 'Content Library', icon: Folder },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`sidebar_wrapper ${is_collapsed ? 'sidebar_collapsed' : ''}`}>
      <div className="sidebar_header">
        <h1 className="sidebar_logo">
          <span className="sidebar_logo_bold">Align</span> CMS
        </h1>
        <button 
          className="sidebar_collapse_btn"
          onClick={() => set_is_collapsed(!is_collapsed)}
          aria-label="Toggle Sidebar"
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      <nav className="sidebar_nav">
        {nav_items.map((item) => {
          const Icon = item.icon;
          return (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={`sidebar_navlink ${item.active ? 'sidebar_navlink_active' : ''}`}
            >
              <Icon size={20} className="sidebar_navicon" />
              {!is_collapsed && <span className="sidebar_navtext">{item.label}</span>}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}