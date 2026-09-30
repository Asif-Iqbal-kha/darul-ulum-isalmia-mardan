import React from 'react';
import { Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Decorative Top Accent Stripe & Motto */}
      <div className="footer-top-accent">
        <div className="container footer-accent-inner">
          <div className="footer-decorative-tag">
            <span className="star-symbol">✦</span>
            <span className="motto-bold">العلم نور</span>
            <span className="star-symbol">✦</span>
          </div>
        </div>
      </div>

      <div className="container footer-container">
        <div className="footer-brand">
          <img 
            src="/logo.png" 
            alt="دارالعلوم اسلامیہ مردان" 
            className="footer-logo" 
          />
          <div className="footer-brand-details">
            <span className="footer-slogan">« العلم نور »</span>
            <span className="footer-name">جامعہ دارالعلوم اسلامیہ مردان</span>
          </div>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} دارالعلوم اسلامیہ مردان — جملہ حقوق محفوظ ہیں۔</p>
        </div>
      </div>
    </footer>
  );
}
