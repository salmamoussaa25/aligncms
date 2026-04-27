// ActionRequired.jsx
import React from 'react';
import { Languages, Bug, FileText, ArrowRight } from 'lucide-react';
import './ActionRequired.css';

export default function ActionRequired() {
  const actions = [
    {
      id: 1,
      title: '3 Pages Missing Arabic Translation',
      desc: 'Services, Blog, About pages need AR content',
      icon: Languages,
      action: 'Review Pages',
      theme: 'blue'
    },
    {
      id: 2,
      title: '2 High-Priority Bugs Open',
      desc: 'Login issue, Payment gateway error',
      icon: Bug,
      action: 'View Bugs',
      theme: 'red'
    },
    {
      id: 3,
      title: '5 Drafts Awaiting Publication',
      desc: '2 blog posts, 3 app content items',
      icon: FileText,
      action: 'Publish',
      theme: 'yellow'
    }
  ];

  return (
    <section className="actionreq_section">
      <h2 className="actionreq_heading">Action Required</h2>
      <div className="actionreq_list">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className={`actionreq_card actionreq_theme_${item.theme}`}>
              <div className="actionreq_iconwrap">
                <Icon size={24} className="actionreq_icon" />
              </div>
              <div className="actionreq_content">
                <h3 className="actionreq_title">{item.title}</h3>
                <p className="actionreq_desc">{item.desc}</p>
              </div>
              <button className="actionreq_btn">
                {item.action}
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}