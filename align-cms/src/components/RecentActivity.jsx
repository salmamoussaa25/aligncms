// RecentActivity.jsx
import React from 'react';
import { Edit3, Zap, Shield, CheckCircle2 } from 'lucide-react';
import './RecentActivity.css';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: 'Salma Moussa',
      action: 'Updated homepage hero section',
      context: 'Welcome to Align Egypt',
      time: '22/03/2026 8:45 PM',
      icon: Edit3,
      theme: 'blue'
    },
    {
      id: 2,
      user: 'Yasmine Sayed',
      action: 'Released Time Blocking feature',
      context: '22/03/2026 7:00 PM',
      time: '',
      icon: Zap,
      theme: 'green'
    },
    {
      id: 3,
      user: 'Amr Tamer',
      action: 'Resolved payment gateway bug',
      context: '22/03/2026 5:00 PM',
      time: '',
      icon: Shield,
      theme: 'yellow'
    },
    {
      id: 4,
      user: 'Sarah Ibrahim',
      action: 'Published wellness tips article',
      context: 'Wellness Tips for Cairo Residents',
      time: '22/03/2026 3:00 PM',
      icon: CheckCircle2,
      theme: 'gray'
    }
  ];

  return (
    <section className="recentactivity_section">
      <h2 className="recentactivity_heading">Recent Activity</h2>
      <div className="recentactivity_card">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div key={act.id} className="recentactivity_item">
              <div className={`recentactivity_iconwrap recentactivity_theme_${act.theme}`}>
                <Icon size={16} />
              </div>
              <div className="recentactivity_content">
                <p className="recentactivity_text">
                  <span className="recentactivity_user">{act.user}</span> {act.action}
                </p>
                <p className="recentactivity_subtext">
                  {act.context} {act.time && <><br/>{act.time}</>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
