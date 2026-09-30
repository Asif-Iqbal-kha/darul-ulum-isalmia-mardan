import React from 'react';
import { Cog, Settings } from 'lucide-react';
import './UnderConstruction.css';

export default function UnderConstruction({ pageName = 'صفحہ' }) {
  return (
    <div className="construction-wrapper">
      <div className="container">
        <div className="clean-construction-card">
          
          {/* Natural Logo Container */}
          <div className="construction-logo-wrapper">
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="construction-logo-img" 
            />
          </div>

          {/* Slogan & Institution Name */}
          <span className="construction-slogan">العلم نور</span>
          <h1 className="construction-madrassa-name">دارالعلوم اسلامیہ مردان</h1>

          {/* Animated Moving Gears */}
          <div className="gears-container">
            <div className="gear gear-main">
              <Cog size={54} strokeWidth={1.75} />
            </div>
            <div className="gear gear-secondary">
              <Settings size={38} strokeWidth={1.75} />
            </div>
            <div className="gear gear-tertiary">
              <Cog size={26} strokeWidth={1.75} />
            </div>
          </div>

          {/* Clean Message */}
          <div className="construction-message-box">
            <h2 className="construction-status-title">
              {pageName ? `${pageName} — زیرِ تعمیر ہے` : 'ویب سائٹ زیرِ تعمیر ہے'}
            </h2>
            <p className="construction-status-en">Work Under Process</p>
            <p className="construction-status-desc">
              اس صفحہ پر کام جاری ہے۔ تمام تفصیلات اور معلومات جلد شامل کی جائیں گی۔
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
