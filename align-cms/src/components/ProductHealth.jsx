import React from 'react';
import { Type, Zap, AlertCircle, Calendar, CheckCircle } from 'lucide-react';
import './ProductHealth.css';

export default function ProductHealth() {
  return (
    <section className="producthealth_section">
      <h2 className="producthealth_heading">Product Health</h2>
      
      <div className="producthealth_grid">
        {/* Content Completeness Card */}
        <div className="producthealth_card">
          <div className="producthealth_cardheader">
            <Type size={16} className="producthealth_icon" />
            <h3 className="producthealth_cardtitle">Content Completeness</h3>
          </div>
          <p className="producthealth_mainstat">74%</p>
          
          <div className="producthealth_barwrap">
            <div className="producthealth_barlabels">
              <span className="producthealth_barlabel">EN</span>
              <span className="producthealth_barval">85%</span>
            </div>
            <div className="producthealth_bartrack">
              {/* Note: width is inline only because it is data-driven */}
              <div className="producthealth_barfill producthealth_fill_green" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="producthealth_barwrap">
            <div className="producthealth_barlabels">
              <span className="producthealth_barlabel">AR</span>
              <span className="producthealth_barval">62%</span>
            </div>
            <div className="producthealth_bartrack">
              <div className="producthealth_barfill producthealth_fill_orange" style={{ width: '62%' }}></div>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="producthealth_card">
          <div className="producthealth_cardheader">
            <Zap size={16} className="producthealth_icon producthealth_icon_green" />
            <h3 className="producthealth_cardtitle">Features</h3>
          </div>
          <ul className="producthealth_list">
            <li className="producthealth_listitem">
              <span className="producthealth_listlabel">Active</span>
              <span className="producthealth_badge producthealth_badge_green">12</span>
            </li>
            <li className="producthealth_listitem">
              <span className="producthealth_listlabel">Beta</span>
              <span className="producthealth_badge producthealth_badge_blue">3</span>
            </li>
            <li className="producthealth_listitem">
              <span className="producthealth_listlabel">Disabled</span>
              <span className="producthealth_badge producthealth_badge_gray">2</span>
            </li>
          </ul>
        </div>

        {/* Issues Card */}
        <div className="producthealth_card">
          <div className="producthealth_cardheader">
            <AlertCircle size={16} className="producthealth_icon producthealth_icon_orange" />
            <h3 className="producthealth_cardtitle">Issues</h3>
          </div>
          <ul className="producthealth_list">
            <li className="producthealth_listitem">
              <span className="producthealth_listlabel">Open</span>
              <span className="producthealth_badge producthealth_badge_red">8</span>
            </li>
            <li className="producthealth_listitem">
              <span className="producthealth_listlabel">Resolved</span>
              <span className="producthealth_badge producthealth_badge_green">34</span>
            </li>
          </ul>
          <button className="producthealth_actionbtn">View All</button>
        </div>

        {/* Latest Release Card */}
        <div className="producthealth_card">
          <div className="producthealth_cardheader">
            <Calendar size={16} className="producthealth_icon producthealth_icon_purple" />
            <h3 className="producthealth_cardtitle">Latest Release</h3>
          </div>
          <p className="producthealth_mainstat">v2.3.0</p>
          <p className="producthealth_subtext">20/03/2026 9:00 PM</p>
          <div className="producthealth_statuswrap">
            <CheckCircle size={14} className="producthealth_statusicon" />
            <span className="producthealth_statustext">Released</span>
          </div>
        </div>
      </div>
    </section>
  );
}