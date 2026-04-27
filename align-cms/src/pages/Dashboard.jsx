// Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/TopBar';
import ActionRequired from '../components/ActionRequired';
import ProductHealth from '../components/ProductHealth';
import QuickActions from '../components/QuickActions';
import DashboardInsights from '../components/DashboardInsights';
import RecentActivity from '../components/RecentActivity';
import SystemUpdates from '../components/SystemUpdates';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard_layout">
      <Sidebar />
      <div className="dashboard_main">
        <Topbar />
        
        <main className="dashboard_scrollarea">
          <div className="dashboard_content">
            
            <div className="dashboard_pageheader">
              <h1 className="dashboard_pagetitle">Dashboard</h1>
              <p className="dashboard_pagesubtitle">Control center for Align Egypt CMS</p>
            </div>

            <ActionRequired />
            <ProductHealth />
            <QuickActions />
            
            {/* 2-Column Grid for Insights and Activity */}
            <div className="dashboard_twocolumn">
              <DashboardInsights />
              <RecentActivity />
            </div>

            <SystemUpdates />

          </div>
        </main>
      </div>
    </div>
  );
}