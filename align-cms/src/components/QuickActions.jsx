
import React from 'react';
import { Plus, FileText, Send, Calendar } from 'lucide-react';
import './QuickActions.css';

export default function QuickActions() {
  const actions = [
    { id: 1, label: 'New Page', icon: Plus, color: 'gray' },
    { id: 2, label: 'Add Content', icon: FileText, color: 'blue' },
    { id: 3, label: 'Send Notification', icon: Send, color: 'green' },
    { id: 4, label: 'Schedule Release', icon: Calendar, color: 'orange' },
  ];

  return (
    <section className="quickactions_section">
      <h2 className="quickactions_heading">Quick Actions</h2>
      <div className="quickactions_grid">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button key={action.id} className="quickactions_btn">
              <div className={`quickactions_iconwrap quickactions_theme_${action.color}`}>
                <Icon size={18} />
              </div>
              <span className="quickactions_label">{action.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}