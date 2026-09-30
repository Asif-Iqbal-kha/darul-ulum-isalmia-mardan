import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  Clock, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import './UnderConstruction.css';

export default function UnderConstruction({ 
  pageTitleUr, 
  pageTitleEn, 
  descriptionUr, 
  expectedItems = [] 
}) {
  return (
    <div className="under-construction-section">
      <div className="container">
        <div className="construction-card">
          {/* Animated Glow Badge */}
          <div className="construction-header-badge">
            <span className="pulsing-dot"></span>
            <Sparkles size={16} />
            <span>صفحہ زیرِ تعمیر ہے (Work Under Process)</span>
          </div>

          {/* Logo & Dome Arch Visual */}
          <div className="construction-logo-frame">
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="construction-logo" 
            />
          </div>

          {/* Page Titles */}
          <h1 className="construction-title">{pageTitleUr}</h1>
          <p className="construction-subtitle-en">{pageTitleEn}</p>

          <p className="construction-desc">
            {descriptionUr || 'اس صفحہ پر فی الحال کام جاری ہے اور تمام ضروری معلومات جلد ہی اپ ڈیٹ کر دی جائیں گی۔ براہ کرم کچھ دیر بعد دوبارہ وزٹ کریں۔'}
          </p>

          {/* Progress Indicator */}
          <div className="progress-container">
            <div className="progress-info">
              <span>ترقیاتی پیش رفت (Progress Status)</span>
              <strong>85% مکمل</strong>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Planned Features List */}
          {expectedItems.length > 0 && (
            <div className="upcoming-features-box">
              <h3 className="upcoming-title">
                <Layers size={18} />
                <span>اس صفحہ پر جلد دستیاب ہونے والی معلومات:</span>
              </h3>
              <ul className="upcoming-list">
                {expectedItems.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="construction-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <ArrowRight size={18} />
              <span>صفحہ اول پر واپس جائیں</span>
            </Link>
            <Link to="/contact" className="btn btn-outline-sky btn-lg">
              <Phone size={18} />
              <span>انتظامیہ سے رابطہ کریں</span>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="construction-note">
            <Clock size={16} />
            <span>جامعہ دارالعلوم اسلامیہ مردان — العلم نور</span>
          </div>
        </div>
      </div>
    </div>
  );
}
