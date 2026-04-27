import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import './SystemUpdates.css';

export default function SystemUpdates() {
  const updates = [
    { id: 1, message: 'Some translations are incomplete', action: 'Review' },
    { id: 2, message: 'Pending items need review', action: 'View' },
  ];

  return (
    <section className="systemupdates_section">
      <h2 className="systemupdates_heading">System Updates</h2>
      <div className="systemupdates_list">
        {updates.map((update) => (
          <div key={update.id} className="systemupdates_card">
            <div className="systemupdates_content">
              <div className="systemupdates_iconwrap">
                <AlertTriangle size={18} />
              </div>
              <span className="systemupdates_text">{update.message}</span>
            </div>
            <button className="systemupdates_btn">
              {update.action} <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}