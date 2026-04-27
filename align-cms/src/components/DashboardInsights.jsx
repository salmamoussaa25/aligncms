import React from 'react';
import { TrendingUp } from 'lucide-react';
import './DashboardInsights.css';

export default function DashboardInsights() {
  const features = [
    { id: 1, name: 'Time Blocking', usage: 89 },
    { id: 2, name: 'Daily Routines', usage: 76 },
    { id: 3, name: 'Goal Setting', usage: 68 },
  ];

  return (
    <section className="dashboardinsights_section">
      <h2 className="dashboardinsights_heading">Insights</h2>
      
      <div className="dashboardinsights_card">
        <div className="dashboardinsights_statrow">
          <span className="dashboardinsights_statlabel">Engagement</span>
          <div className="dashboardinsights_trendwrap">
            <TrendingUp size={16} />
            <span className="dashboardinsights_trendval">+12.5%</span>
          </div>
        </div>
        <p className="dashboardinsights_statdesc">
          User engagement trending upward this week
        </p>
      </div>

      <div className="dashboardinsights_card">
        <h3 className="dashboardinsights_cardtitle">Most Used Features</h3>
        <div className="dashboardinsights_featurelist">
          {features.map((feat) => (
            <div key={feat.id} className="dashboardinsights_featureitem">
              <div className="dashboardinsights_featureheader">
                <span className="dashboardinsights_featurename">{feat.name}</span>
                <span className="dashboardinsights_featureval">{feat.usage}%</span>
              </div>
              <div className="dashboardinsights_bartrack">
                <div 
                  className="dashboardinsights_barfill" 
                  style={{ width: `${feat.usage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}