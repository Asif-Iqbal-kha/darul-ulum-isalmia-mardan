import React from 'react';
import { Cog, Settings } from 'lucide-react';
import './UnderConstruction.css';

export default function UnderConstruction({ pageName = 'صفحہ اول' }) {
  return (
    <section className="construction-fluid-section">
      <div className="container construction-fluid-content">
        
        {/* Natural Logo Container - No Box / No Card */}
        <div className="construction-logo-hero">
          <img 
            src="/logo.png" 
            alt="دارالعلوم اسلامیہ مردان" 
            className="construction-logo-img" 
          />
        </div>

        {/* Brand Slogan & Madrassa Name */}
        <div className="construction-brand-header">
          <span className="construction-slogan-badge">« العلم نور »</span>
          <h1 className="construction-title-main">جامعہ دارالعلوم اسلامیہ مردان</h1>
          <p className="construction-subtitle-en">JAMIA DARUL ULOOM ISLAMIA MARDAN</p>
        </div>

        {/* Animated Moving Gears (Seamlessly integrated) */}
        <div className="construction-gears-stage">
          <div className="gear-element gear-large">
            <Cog size={68} strokeWidth={1.6} />
          </div>
          <div className="gear-element gear-medium">
            <Settings size={46} strokeWidth={1.6} />
          </div>
          <div className="gear-element gear-small">
            <Cog size={30} strokeWidth={1.6} />
          </div>
        </div>

        {/* Status Text without borders or dev boxes */}
        <div className="construction-status-area">
          <h2 className="construction-page-status">
            {pageName ? `${pageName} — زیرِ تعمیر ہے` : 'ویب سائٹ زیرِ تعمیر ہے'}
          </h2>
          <span className="construction-status-tag">WORK UNDER PROCESS</span>
          <p className="construction-lead-text">
            اس صفحہ پر کام جاری ہے، تمام متعلقہ معلومات اور تفصیلات جلد شامل کر دی جائیں گی۔
          </p>
        </div>

      </div>
    </section>
  );
}
